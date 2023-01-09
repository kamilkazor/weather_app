import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { z } from "zod";

const dataSchema = z
  .object({
    latitude: z.number(),
    longitude: z.number(),
    current_weather: z
      .object({
        temperature: z.number(),
        windspeed: z.number(),
        weathercode: z.number(),
        time: z.string(),
      })
      .passthrough(),
    daily: z
      .object({
        time: z.array(z.string()).length(7),
        weathercode: z.array(z.number()).length(7),
        temperature_2m_max: z.array(z.number()).length(7),
        temperature_2m_min: z.array(z.number()).length(7),
        apparent_temperature_max: z.array(z.number()).length(7),
        apparent_temperature_min: z.array(z.number()).length(7),
        precipitation_sum: z.array(z.number()).length(7),
        sunrise: z.array(z.string()).length(7),
        sunset: z.array(z.string()).length(7),
        windspeed_10m_max: z.array(z.number()).length(7),
      })
      .passthrough(),
    daily_units: z
      .object({
        temperature_2m_max: z.string(),
        temperature_2m_min: z.string(),
        apparent_temperature_max: z.string(),
        apparent_temperature_min: z.string(),
        precipitation_sum: z.string(),
        windspeed_10m_max: z.string(),
      })
      .passthrough(),
  })
  .passthrough();

export type WeatherData = z.infer<typeof dataSchema>;

const responseSchema = z
  .object({
    data: dataSchema,
  })
  .passthrough();

function getWeather(latitude: number, longitude: number, metric: boolean) {
  const params: { [key: string]: any } = {
    latitude: latitude,
    longitude: longitude,
    current_weather: true,
    timezone: "auto",
    daily:
      "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,windspeed_10m_max",
  };
  if (!metric) {
    params.temperature_unit = "fahrenheit";
    params.windspeed_unit = "mph";
    params.precipitation_unit = "inch";
  }
  return axios
    .get("https://api.open-meteo.com/v1/forecast", {
      params: params,
    })
    .then((res) => responseSchema.parse(res));
}

function useWeather(latitude: number, longitude: number, metric: boolean) {
  return useQuery(
    ["weather", latitude, longitude, metric],
    () => {
      return getWeather(latitude, longitude, metric);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
}

export default useWeather;
