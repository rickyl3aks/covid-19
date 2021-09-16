import React from 'react'
import styles from "../styles/Infos.module.css";

export const infos = ({countries, population, day,  cases, casesActive, recovered}) => {
  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
    return (
<div className={styles.container}>
        <div className={styles.deaths}>
          Total deaths: {countries ? format(countries) : "No data available"}
        </div>
        <div className={styles.population}>
          Population: {population ? format(population) : "No data available"}
        </div>
        <div>Update: {day}</div>
        <div>New Cases: {cases ? format(cases) : "No data available"}</div>
        <div>
          New Active: {casesActive ? format(casesActive) : "No data available"}
        </div>
        <div>
          Recovered: {recovered ? format(recovered) : "No data available"}
        </div>
      </div>
    )
}

export default infos
