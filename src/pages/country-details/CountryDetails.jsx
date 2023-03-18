import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import countries from '../../../data.json';
import Badge from '../../components/badge/Badge';
import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  let { id } = useParams();

  const navigate = useNavigate()

  const countryData = countries.filter((country) => country.name === id)[0];

  const namesArray = (items) => {
    const names = items.map(function (item) {
      return item['name'];
    });
    return names.join(', ');
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.backBtn}
        onClick={() => navigate('/')}
      >
        <i className="fa-solid fa-arrow-left"></i>
        <p>Volver</p>
      </div>

      <div className={styles.countryData}>
        <img className={styles.flag} src={countryData.flags.svg} alt="flag" />
        <div className={styles.data}>
          <h2>{countryData.name}</h2>
          <div className={styles.information}>
            <div className={styles.primaryInformation}>
              <p>
                <b>Native name:</b> {countryData.nativeName}
              </p>
              <p>
                <b>Population:</b>{' '}
                {countryData.population.toLocaleString('es-CO')}
              </p>
              <p>
                <b>Region:</b> {countryData.region}
              </p>
              <p>
                <b>Sub Region:</b> {countryData.subregion}
              </p>
              <p>
                <b>Capital:</b> {countryData.capital}
              </p>
            </div>

            <div className={styles.secondaryInformation}>
              <p>
                <b>Top Level Domain:</b> {countryData.topLevelDomain.join(', ')}
              </p>
              <p>
                <b>Currencies:</b> {namesArray(countryData.currencies)}
              </p>
              <p>
                <b>Languages:</b> {namesArray(countryData.languages)}
              </p>
            </div>

            <div className={styles.tertiaryInformation}>
              <b>Border Countries:</b>
              {countryData.borders?.map((border, index) => (
                <Badge border={border} key={countryData.name + index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
