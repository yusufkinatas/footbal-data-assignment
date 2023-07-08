import { ArrowBackIcon } from "@chakra-ui/icons";
import { Heading, IconButton, Stack } from "@chakra-ui/react";
import { useMemo } from "react";

import { shuffleArray } from "@/utils/shuffle-array";
import { Team } from "@/utils/types";
import { useTeamStatistics } from "@/utils/use-team-statistics";

import { EmptyState } from "../empty-state";
import { LoadingIndicator } from "../loading-indicator";
import { TeamCard } from "../team-card";
import { TeamList } from "../team-list";
import { StatisticsSection } from "./statistics-section";

export const TeamStatistics = ({
  team,
  setSelectedTeam,
  competitorTeams,
}: {
  team: Team;
  competitorTeams: Team[];
  setSelectedTeam: (team: Team | undefined) => void;
}) => {
  const [teamStatistics, isLoading] = useTeamStatistics(team.id);

  const random3Competitors = useMemo(() => {
    const availableCompetitors = competitorTeams.filter(
      (competitor) => competitor.id !== team.id
    );

    const clonedArray = [...availableCompetitors];
    shuffleArray(clonedArray);

    return clonedArray.slice(0, 3);
  }, [competitorTeams, team]);

  return (
    <Stack gap={5}>
      <IconButton
        alignSelf="flex-start"
        aria-label="go back"
        onClick={() => setSelectedTeam(undefined)}
        icon={<ArrowBackIcon />}
      />

      <TeamCard team={team} />

      {isLoading ? (
        <LoadingIndicator />
      ) : teamStatistics ? (
        <>
          <Heading size="lg">2022 Premier League Statistics</Heading>
          <StatisticsSection teamStatistics={teamStatistics} />

          <Heading size="lg">Other Teams from 2022 Premier League</Heading>
          <TeamList
            setSelectedTeam={setSelectedTeam}
            teams={random3Competitors}
          />
        </>
      ) : (
        <EmptyState description="This team did not play in 2022 Premier League" />
      )}
    </Stack>
  );
};
