import Head from "next/head";
import React, { useState } from "react";
import Infos from "../components/infos";
import Btn from "../components/btn";
import Select from "../components/select";
import Chart from "../components/chart";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const [filter, setFilter] = useState();
  const [country, setCountry] = useState();
  const [deaths, setDeaths] = useState();
  const [population, setPopulation] = useState();
  const [day, setDay] = useState();
  const [cases, setCases] = useState();
  const [casesActive, setCasesActive] = useState();
  const [recovered, setRecovered] = useState();
  const [value, setValue] = useState();

  const filterCategory = filter
    ? data.filter((c) => c.continent === filter)
    : data;

  const continents = [...new Set(data.map((c) => c.continent))];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

    setRecovered(data.response[0].cases.recovered);
    setCases(data.response[0].cases.new);
    setDeaths(data.response[0].deaths.total);
    setCountry(e.target.value);
    setPopulation(data.response[0].population);
    setDay(data.response[0].day);
    setCasesActive(data.response[0].cases.active);
  };
  return (
    <div>
      <Head>
        <title>Covid 19</title>
      </Head>
      <div className={styles.bg}>
        <Btn continents={continents} setFilter={setFilter} />
        {deaths !== undefined ? (
          <Infos
            deaths={deaths}
            population={population}
            day={day}
            cases={cases}
            casesActive={casesActive}
            recovered={recovered}
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

      {deaths !== undefined ? (
        <Chart recovered={recovered} cases={cases} deaths={deaths} />
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
