import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getcovid } from '../redux/covid/covid';
import styles from './styles/Home.module.css';
import Header from './Header';

const Home = () => {
  const data = useSelector((state) => state.covid.covid);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(getcovid());
    }
  }, []);

  const continent = data?.filter((item) => item.continent === 'Europe');

  return (
    <>
      <Header />
      <section className={styles.main}>
        {continent?.map((covid) => (
          <Link
            to={{ pathname: `/country/${covid.country}` }}
            key={covid.country}
            className={styles.card}
          >
            <div className={styles.arrowWrapper}>
              <BsArrowRightCircle className={styles.arrow} />
            </div>

            <img
              className={styles.flags}
              src={covid.flag}
              alt={covid.country}
            />
            <div className={styles.text}>
              <h2>{covid.country}</h2>
              <p>{covid.population.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Home;
