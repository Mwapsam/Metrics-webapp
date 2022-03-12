const url = 'https://disease.sh/v3/covid-19/countries';
export const GET_COVID_DATA = 'GET_COVID_DATA';
export const GET_STATE = 'GET_STATE';

const initialState = [];

export const getInitialState = (payload) => ({
  type: GET_STATE,
  payload,
});

const loadcovid = (payload) => ({
  type: GET_COVID_DATA,
  payload,
});

export const getcovid = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const covid = await response.json();

    dispatch(
      loadcovid(
        covid.map((data) => {
          const {
            continent,
            country,
            countryInfo: { _id: id, flag },
            cases,
            deaths,
            recovered,
            active,
            tests,
            population,
            todayCases,
            todayDeaths,
            todayRecovered,
          } = data;

          return {
            continent,
            country,
            id,
            flag,
            cases,
            deaths,
            recovered,
            active,
            tests,
            population,
            todayCases,
            todayDeaths,
            todayRecovered,
          };
        }),
      ),
    );
  } catch (err) {
    throw new Error(err);
  }
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DATA:
      return { ...state, covid: action.payload };
    case GET_STATE:
      return [...state];
    default:
      return state;
  }
};

export default covidReducer;
