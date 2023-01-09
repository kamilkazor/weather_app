import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { z } from "zod";

const resultSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    country_code: z.string(),
    admin1: z.string().optional(),
  })
  .passthrough();

const dataSchema = z
  .object({
    results: z.array(resultSchema).optional(),
  })
  .passthrough();

const responseSchema = z
  .object({
    data: dataSchema,
  })
  .passthrough();

function getGeocoding(locationName: string) {
  return axios
    .get("https://geocoding-api.open-meteo.com/v1/search", {
      params: {
        name: locationName,
      },
    })
    .then((res) => responseSchema.parse(res));
}

function useGeocoding(locationName: string) {
  return useQuery(
    ["geocoding", locationName],
    () => {
      return getGeocoding(locationName);
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
}

export default useGeocoding;
