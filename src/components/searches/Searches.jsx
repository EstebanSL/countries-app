import React, { useState } from 'react';
import countries from '../../../data.json';
import styles from './Searches.module.css';

const Searches = ({ countriesList, setCountries }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const handleType = (e) => {
    setSearch(e.target.value);
    if (e.target.value && filter !== 'All') {
      const matches = countries.filter((country) =>
        country.name
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase() && country.region === filter)
      );
      setCountries(matches);
    }

    if (e.target.value && filter === 'All') {
      const matches = countries.filter((country) =>
        country.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setCountries(matches);
    }

    if (!e.target.value) {
      setCountries(countries);
    }
  };

  const handleFilter = (e) => {
    if (search && e.target.value !== 'All') {
      const matches = countries.filter(
        (country) =>
          country.name.toLowerCase().startsWith(search.toLowerCase()) &&
          country.region === e.target.value
      );
      setCountries(matches);
      return;
    }

    if (search && e.target.value === 'All') {
      const matches = countries.filter((country) =>
        country.name.toLowerCase().startsWith(search.toLowerCase())
      );
      setCountries(matches);
      return;
    }

    if (!search && e.target.value !== 'All') {
      const matches = countries.filter(
        (country) => country.region === e.target.value
      );
      setCountries(matches);
      return;
    }

    setCountries(countries);
  };

  return (
    <div className={styles.searches}>
      <div className={styles.inputCont}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className={styles.input} type="text" value={search} onChange={(e) => handleType(e)} placeholder='Search a country' />
      </div>
      <select onChange={(e) => handleFilter(e)} className={`${styles.inputCont} ${styles.select}`} defaultValue='All'>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        Europe
        <option value="All">
          All
        </option>
      </select>
    </div>
  );
};

export default Searches;
