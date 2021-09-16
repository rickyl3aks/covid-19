import React from 'react';
import styles from '../styles/btn.module.css'

export const btn = ({continents, setFilter}) => {

    return (
        <div className={styles.container}>
              {continents.map((continent) => {
        return (
         continent !== null ? <button className={styles.btn} key={continent} onClick={() => setFilter(continent)}>
            {continent}
          </button> : null
        );
      })}
        </div>
    )
}

export default btn
