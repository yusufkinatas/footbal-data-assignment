import useSWR from "swr";

import { Standing } from "@/utils/types";

export const useTeamStatistics = (teamId: number) => {
  const { data, isLoading } = useSWR<{ standings?: Standing[] }>(
    `/competitions/PL/standings?season=2022`
  );

  const totalTable = data?.standings?.find(
    (standing) => standing.type === "TOTAL"
  )?.table;

  const teamStatistics = totalTable?.find((row) => row.team.id === teamId);

  return [teamStatistics, isLoading] as const;
};
