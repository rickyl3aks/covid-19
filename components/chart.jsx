import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export const chart = ({recovered, cases, deaths, country}) => {

  return (
    <ResponsiveBar
    data={[
      {
        data: "Recovered",
        Recovered: recovered
      },
      {
        data: "Cases",
        "New cases": cases
      },
      {
        data: "Death",
        Deaths: deaths
      },
    ]}
    keys={["Recovered", 'New cases', 'Deaths']}
      indexBy="data"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors={[ 'rgb(35, 131, 35)', 'rgb(255, 192, 203)', 'rgb(231, 21, 21)' ]}
      colorBy='index'
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40
      }}
      defs={[
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Recovered",
          },
          id: "dots",
        },
        {
          match: {
            id: "Death",
          },
          id: "lines",
        },
      ]}
    />
  )
}



export default chart