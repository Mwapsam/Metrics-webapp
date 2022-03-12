const GET_COVID_DATA = 'GET_COVID_DATA';

const initialState = [];

const covid = [
  {
    updated: 1647013126264,
    country: 'Afghanistan',
    countryInfo: {
      _id: 4,
      iso2: 'AF',
      iso3: 'AFG',
      lat: 33,
      long: 65,
      flag: '../assests/asia.jpg',
    },
    cases: 175974,
    todayCases: 81,
    deaths: 7640,
    todayDeaths: 1,
    recovered: 158302,
    todayRecovered: 18,
    active: 10032,
    critical: 1124,
    casesPerOneMillion: 4355,
    deathsPerOneMillion: 189,
    tests: 902544,
    testsPerOneMillion: 22338,
    population: 40404557,
    continent: 'Asia',
    oneCasePerPeople: 230,
    oneDeathPerPeople: 5289,
    oneTestPerPeople: 45,
    activePerOneMillion: 248.29,
    recoveredPerOneMillion: 3917.92,
    criticalPerOneMillion: 27.82,
  },
];

const loadcovid = (covid) => ({
  type: GET_COVID_DATA,
  payload: covid,
});

export const getcovid = () => async (dispatch) => {
  dispatch(loadcovid(covid));
  return covid;
};

export const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DATA:
      return { ...state, covid: action.payload };
    default:
      return state;
  }
};

export { covid, initialState };
