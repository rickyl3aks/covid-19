import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from '../styles/chart.module.css'

 export const chart = ({recovered, cases, deaths}) => {
    return (
        <div>
              <Bar
              className={styles.chart}
              data={{
                labels: ["Recovered", "New Cases", "Death"],
                datasets: [
                  {
                    data: [recovered, cases, deaths],
                    backgroundColor: [
                      "rgb(35, 131, 35)",
                      "rgb(255, 192, 203)",
                      "rgb(231, 21, 21)",
                    ],
                    borderColor: [
                      "rgb(35, 131, 35)",
                      "rgb(255, 192, 203)",
                      "rgb(231, 21, 21)",
                    ],
                  },
                ],
              }}
              height={50}
              width={100}
              options={
                ({ maintainAspectRatio: false },
                { plugins: { legend: { display: false } } })
              }
            />
        </div>
    )
}

export default chart