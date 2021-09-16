import React from 'react'
import styles from "../styles/Infos.module.css";

export const infos = ({countries, population, day,  cases, casesActive, recovered}) => {
  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
    return (
<div className={styles.container}>
        <h1>Update: {day}</h1>
        <h1 className={styles.deaths}>
          Total deaths: {countries ? format(countries) : "No data available"}
        </h1>
        <h1 className={styles.population}>
          Population: {population ? format(population) : "No data available"}
        </h1>
        <h1>New Cases: {cases ? format(cases) : "No data available"}</h1>
        <h1>
          New Active: {casesActive ? format(casesActive) : "No data available"}
        </h1>
        <h1>
          Recovered: {recovered ? format(recovered) : "No data available"}
        </h1>
      </div>
    )
}

export default infos
