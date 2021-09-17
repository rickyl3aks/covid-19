import React from 'react';
import styles from '../styles/btn.module.css'

export const btn = ({continents, setFilter}) => {

    return (
        <div className={styles.container}>
              {continents.map((continent, index) => {
        return (
         <h1 className={styles.btn} key={index} onClick={() => setFilter(continent)}>
            {continent}
          </h1> 
        );
      })}
        </div>
    )
}

export default btn
