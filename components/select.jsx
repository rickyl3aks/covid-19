import React from 'react';
import styles from '../styles/select.module.css'

 const select = ({filterCategory, handleOnChange}) => {
    return (
        <div className={styles.container} >
            <select onChange={(e) => handleOnChange(e)}>
        <option hidden value="default">
          --Choose a Country--
        </option>
        {filterCategory.map((country, index) => {
          return (
            <option key={index} value={country.country}>
              {country.country}
            </option>
          );
        })}
      </select>
        </div>
    )
}

export default select
