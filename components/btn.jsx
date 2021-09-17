import React from 'react';
import styles from '../styles/btn.module.css'

export const btn = ({continents, setFilter}) => {

    return (
        <div className={styles.container}>
              {continents.map((continent, index) => {
        return (
          //mapping continents result on one element NULL
         continent !== null ? <h1 className={styles.btn} key={index} onClick={() => setFilter(continent)}>
            {continent}
          </h1> : null
        );
      })}
        </div>
    )
}

export default btn
