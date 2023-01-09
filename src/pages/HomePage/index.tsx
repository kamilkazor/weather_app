import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWeather from "../../query/useWeather";
import CurrentWeather from "../../components/CurrentWeather";
import DailyWeather from "../../components/DailyWeather";
import Options from "../../components/Options";

const Msg = styled.div`
  h2 {
    font-weight: normal;
  }
`;

export interface Place {
  latitude: number;
  longitude: number;
  name: string;
}

const HomePage = () => {
  const [metric, setMetric] = useState(true);
  const [place, setPlace] = useState<Place>({
    latitude: 52.22977,
    longitude: 21.01178,
    name: "WARSAW, Masovian, PL",
  });

  const { data, isLoading, isError, error } = useWeather(
    place.latitude,
    place.longitude,
    metric
  );

  return (
    <>
      <Options setMetric={setMetric} setPlace={setPlace} />
      {isLoading && (
        <Msg>
          <h2>Loading...</h2>
        </Msg>
      )}
      {isError && (
        <Msg>
          <h2>Something went wrong...</h2>
          <p>
            Error:{" "}
            {error instanceof Error
              ? error.message
              : " the app could not fetch the data from the server"}
          </p>
        </Msg>
      )}
      {data?.data && (
        <>
          <CurrentWeather weatherData={data.data} place={place} />
          <DailyWeather weatherData={data.data} />
        </>
      )}
    </>
  );
};

export default HomePage;
