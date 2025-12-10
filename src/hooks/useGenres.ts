import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import {type FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const getGenre = () =>
    apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: getGenre,
    staleTime: 1000 * 24 * 60 * 60, // 24h
    keepPreviousData: true,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;