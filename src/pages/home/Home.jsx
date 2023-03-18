import React, { useState } from 'react';
import Country from '../../components/country/Country';
import countries from '../../../data.json';
import styles from './Home.module.css';
import Searches from '../../components/searches/Searches';

const Home = () => {
  const [countriesList, setCountriesList] = useState(countries);

  return (
    <div className={styles.home}>
      <Searches countriesList={countriesList} setCountries={setCountriesList} />
      <div className={styles.countriesList}>
        {countriesList.length === 0 && <div className={styles.noResults}>No Results...</div>}
        {countriesList.length > 0 &&
          countriesList.map((country) => {
            return <Country key={country.name} country={country} />;
          })}
      </div>
    </div>
  );
};

export default Home;
