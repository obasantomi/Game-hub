import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import type { Platform } from "../hooks/Platform";
const platFormService = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platFormService.getAll,
    staleTime: ms("24h"),
  });
};

export default usePlatforms;
