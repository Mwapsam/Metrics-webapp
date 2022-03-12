import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getcovid } from '../redux/covid/covid';
import styles from './styles/Details.module.css';

const Details = () => {
  const data = useSelector((state) => state.covid.covid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(getcovid());
    }
  }, []);

  const { name } = useParams();
  const country = data?.filter((item) => item.country === name);

  return (
    <div>
      {country?.map((info) => (
        <div key={info.id}>
          <div className={styles.flagCard}>
            <div className={styles.texts}>
              <h1>{name}</h1>
              <h3>Total Population</h3>
              <h4>{info.population.toLocaleString()}</h4>
            </div>
            <img src={info.flag} alt={name} className="flag2" />
          </div>
          <div className={styles.list}>
            <li className={styles.listItems}>
              <h3>Cases</h3>
              <p>{info.cases.toLocaleString()}</p>
            </li>
            <li className={styles.listItems}>
              <h3>Deaths</h3>
              <p>{info.deaths.toLocaleString()}</p>
            </li>
            <li className={styles.listItems}>
              <h3>Recoveries</h3>
              <p>{info.recovered.toLocaleString()}</p>
            </li>
            <li className={styles.listItems}>
              <h3>Active Cases</h3>
              <p>{info.active.toLocaleString()}</p>
            </li>
            <li className={styles.listItems}>
              <h3>Tests</h3>
              <p>{info.tests.toLocaleString()}</p>
            </li>
            <li className={styles.listItems}>
              <h3>Today&apos;s Cases</h3>
              <p>{info.todayCases.toLocaleString()}</p>
            </li>
            <li className={styles.listItems}>
              <h3>Today&apos;s Fatalities</h3>
              <p>{info.todayDeaths.toLocaleString()}</p>
            </li>
            <li className={styles.listItems}>
              <h3>Today&apos;s Recoveries</h3>
              <p>{info.todayRecovered.toLocaleString()}</p>
            </li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
