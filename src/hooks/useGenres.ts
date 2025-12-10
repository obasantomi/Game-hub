import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { type FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const genreService = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 1000 * 24 * 60 * 60, // 24h
    keepPreviousData: true,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
