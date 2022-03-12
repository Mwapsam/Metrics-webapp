import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { getcovid } from '../redux/covid/covid';
import styles from './styles/Home.module.css';

const Home = () => {
  const data = useSelector((state) => state.covid.covid);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(getcovid());
    }
  }, []);

  const { continent } = useParams();
  const continents = data?.filter((item) => item.continent === continent);

  const [searchTerm, setSearchTerm] = useState('');

  const countryFilter = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className={styles.search__container}>
        <p className={styles.search__title}>{continent}</p>
        <input
          type="text"
          className={styles.search__input}
          value={searchTerm}
          placeholder="Type to SEARCH..."
          onChange={countryFilter}
        />
        <br />
      </div>

      <section className={styles.main}>
        {continents
          ?.filter((covid) => {
            if (searchTerm === '') {
              return covid;
            }
            return covid.country.toLowerCase().includes(searchTerm);
          })
          .map((covid) => (
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
