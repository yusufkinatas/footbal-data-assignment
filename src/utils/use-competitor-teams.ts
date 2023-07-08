import useSWR from "swr";

import { Team } from "@/utils/types";

export const useCompetitorTeams = () => {
  return useSWR<{ teams: Team[] }>("/competitions/PL/teams?season=2022");
};
