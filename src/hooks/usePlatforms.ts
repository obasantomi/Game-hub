import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
const platFormService = new APIClient<Platform>("/platforms");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platFormService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default usePlatforms;
