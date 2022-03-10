import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getcovid } from '../redux/covid/covid';

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
  console.log(country);

  return (
    <div>
      {country?.map((info) => (
        <div key={info.id}>
          <h1>{name}</h1>
          <img src={info.flag} alt={name} className="flag2" />
        </div>
      ))}
    </div>
  );
};

export default Details;
