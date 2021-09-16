import React from 'react';
import styles from '../styles/btn.module.css'

export const btn = ({continents, setFilter}) => {

    return (
        <div className={styles.container}>
              {continents.map((continent) => {
        return (
         continent !== null ? <h1 className={styles.btn} key={continent} onClick={() => setFilter(continent)}>
            {continent}
          </h1> : null
        );
      })}
        </div>
    )
}

export default btn
