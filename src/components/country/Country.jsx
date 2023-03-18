import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Country.module.css';

const Country = ({ country }) => {

  const navigate = useNavigate()

  return (
    <div className={styles.country} onClick={() => navigate(`country/${country.name}`)}>
      <img src={country.flags.svg} alt="flag" loading="lazy" />
      <div className={styles.info}>
        <h2>{country.name}</h2>
        <p>
          <b>Population:</b> {
          country.population.toLocaleString('es-CO')}
        </p>
        <p>
          <b>Region:</b> {country.region}
        </p>
        <p>
          <b>Capital:</b> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
