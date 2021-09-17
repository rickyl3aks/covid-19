import React from 'react';
import {Bar} from 'react-chartjs-2';
import styles from '../styles/chart.module.css'

 const chart = ({recovered, cases, countries}) => {
    return (
        <div>
              <Bar
              className={styles.chart}
              data={{
                labels: ["Recovered", "Cases", "Death"],
                datasets: [
                  {
                    data: [recovered, cases, countries],
                    backgroundColor: [
                      "rgb(35, 131, 35)",
                      "rgb(255, 206, 86)",
                      "rgb(231, 21, 21)",
                    ],
                    borderColor: [
                      "rgb(35, 131, 35)",
                      "rgb(255, 206, 86)",
                      "rgb(231, 21, 21)",
                    ],
                  },
                ],
              }}
              height={80}
              width={150}
              options={
                ({ maintainAspectRatio: false },
                { plugins: { legend: { display: false } } })
              }
            />
        </div>
    )
}

export default chart