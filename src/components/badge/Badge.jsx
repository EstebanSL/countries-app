import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Badge.module.css'
import countries from '../../../data.json'

const Badge = ({border}) => {

  const navigate = useNavigate()

  const navigateToCountry = () => {
    const country = countries.filter((country) => country.alpha3Code === border)[0]
    navigate(`/country/${country.name}`)
  }

  return (
    <div className={styles.badge} onClick={() => navigateToCountry()}>{border}</div>
  )
}

export default Badge