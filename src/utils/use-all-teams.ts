import useSWR from "swr";

import { Team } from "@/utils/types";

export const useAllTeams = () => {
  return useSWR<{ teams: Team[] }>("/teams?limit=500");
};
