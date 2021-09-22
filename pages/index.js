import Head from "next/head";
import React, { useState, useReducer } from "react";
import Infos from "../components/infos";
import Btn from "../components/btn";
import Select from "../components/select";
import Chart from "../components/chart";
import styles from "../styles/Home.module.css";

const initialState = {
  country: null,
  deaths: null,
  population: null,
  day: null,
  cases: null,
  recovered: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "get data":
      return {
        country: action.payload.country,
        deaths: action.payload.deaths,
        population: action.payload.population,
        day: action.payload.day,
        cases: action.payload.cases,
        recovered: action.payload.recovered,
      };
      break;
    default:
      state;
  }
};

export default function Home({ data }) {
  const [filter, setFilter] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterCategory = filter
    ? data.filter((c) => c.continent === filter)
    : data;

  const continents = [...new Set(data.map((c) => c.continent))];

  const handleOnChange = async (e) => {
    const res = await fetch(
      "https://covid-193.p.rapidapi.com/statistics?country=" + e.target.value,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": process.env.wcConsumerKey,
        },
      }
    );
    const data = await res.json();

    dispatch({
      type: "get data",
      payload: {
        country: e.target.value,
        deaths: data.response[0].deaths.total,
        population: data.response[0].population,
        day: data.response[0].day,
        cases: data.response[0].cases.new,
        recovered: data.response[0].cases.recovered,
      },
    });
  };

  return (
    <div>
      <Head>
        <title>Covid 19</title>
      </Head>
      <div className={styles.bg}>
        <Btn continents={continents} setFilter={setFilter} />
        {state.day !== null ? (
          <Infos
            deaths={state.deaths}
            population={state.population}
            day={state.day}
            cases={state.cases}
            casesActive={state.casesActive}
            recovered={state.recovered}
          />
        ) : filter !== undefined ? (
          <h1 className={styles.title}>Now choose a country</h1>
        ) : (
          <h1 className={styles.title}>Choose a continent</h1>
        )}
      </div>

      {filter !== undefined ? (
        <Select
          filterCategory={filterCategory}
          handleOnChange={handleOnChange}
        />
      ) : null}

      {state.day !== null ? (
        <div style={{ height: "250px", margin: "0 1rem" }}>
          <Chart
            recovered={state.recovered}
            cases={state.cases}
            deaths={state.deaths}
            country={state.country}
          />
        </div>
      ) : null}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": process.env.wcConsumerKey,
    },
  });
  const data = await res.json();

  return { props: { data: data.response ?? null } };
};
