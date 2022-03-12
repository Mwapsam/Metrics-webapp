import covidReducer, {
  getcovid,
  getInitialState,
  GET_COVID_DATA,
} from '../redux/covid/covid';

jest.mock('../redux/covid/covid');

const data = [
  {
    updated: 1647013126264,
    country: 'Afghanistan',
    countryInfo: {
      _id: 4,
      iso2: 'AF',
      iso3: 'AFG',
      lat: 33,
      long: 65,
      flag: 'https://disease.sh/assets/img/flags/af.png',
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

describe('load continents covid data', () => {
  test('Test connection to the Redux Store', () => {
    const state = getInitialState;
    expect(state).toBe(undefined);
  });

  test('Test access to the API', () => {
    const dispatch = jest.fn();
    dispatch(getcovid());
  });

  test('Test the reducer function', () => {
    const initialState = [];
    const state = covidReducer(initialState, getcovid());
    expect(state).toEqual(data);
  });

  it('Get country', () => {
    const state = [];
    const newState = covidReducer(state, {
      type: GET_COVID_DATA,
      payload: [
        {
          updated: 1647013126264,
          country: 'Afghanistan',
          countryInfo: {
            _id: 4,
            iso2: 'AF',
            iso3: 'AFG',
            lat: 33,
            long: 65,
            flag: 'https://disease.sh/assets/img/flags/af.png',
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
      ],
    });

    expect(newState).toEqual([
      {
        updated: 1647013126264,
        country: 'Afghanistan',
        countryInfo: {
          _id: 4,
          iso2: 'AF',
          iso3: 'AFG',
          lat: 33,
          long: 65,
          flag: 'https://disease.sh/assets/img/flags/af.png',
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
    ]);
  });
});
