import { useQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "../services/api-client";
import type { ScreenShot } from "../entities/ScreenShots";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery<FetchResponse<ScreenShot>, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useScreenshots;
