import Head from "next/head";
import React, { useState } from "react";
import Infos from "../components/infos";
import Btn from "../components/btn";
import Chart from "../components/chart";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const [filter, setFilter] = useState();
  const [countries, setCountries] = useState();
  const [population, setPopulation] = useState();
  const [day, setDay] = useState();
  const [cases, setCases] = useState();
  const [casesActive, setCasesActive] = useState();
  const [recovered, setRecovered] = useState();

  const filterCategory = filter
    ? data.filter((c) => c.continent === filter)
    : data;

  const continents = [...new Set(data.map((c) => c.continent))];

  const getInfos = (deaths, pop, day, newCases, active, recover) => {
    setCountries(deaths);
    setPopulation(pop);
    setDay(day);
    setCases(newCases);
    setCasesActive(active);
    setRecovered(recover);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Head>
        <title>Covid 19</title>
      </Head>
      <div className={styles.bg}>
        <Btn continents={continents} setFilter={setFilter} />
        {countries !== undefined ? (
          <Infos
            countries={countries}
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
      {countries !== undefined ? (
        <Chart recovered={recovered} cases={cases} countries={countries} />
      ) : null}
      {filter !== undefined
        ? filterCategory.map((country) => {
            return (
              <h1
                className={styles.country}
                key={country.country}
                onClick={() => {
                  getInfos(
                    country.deaths.total,
                    country.population,
                    country.day,
                    country.cases.new,
                    country.cases.active,
                    country.cases.recovered
                  );
                  scrollToTop();
                }}
              >
                {country.country}
              </h1>
            );
          })
        : null}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://covid-193.p.rapidapi.com/statistics", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_API_KEY,
    },
  });
  const data = await res.json();

  return { props: { data: data.response ?? null } };
};
