import { Container, Heading, Stack } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import { LoadingIndicator } from "@/components/loading-indicator";
import { TeamSearch } from "@/components/team-search";
import { TeamStatistics } from "@/components/team-statistics/team-statistics";
import { Team } from "@/utils/types";
import { useAllTeams } from "@/utils/use-all-teams";
import { useCompetitorTeams } from "@/utils/use-competitor-teams";

const Home = () => {
  const allTeamsSWR = useAllTeams();
  const competitorTeamsSWR = useCompetitorTeams();

  const [filter, setFilter] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<Team>();

  const { teams: allTeams } = allTeamsSWR.data ?? {};
  const { teams: competitorTeams } = competitorTeamsSWR.data ?? {};

  const filteredTeams = useMemo(() => {
    const regex = new RegExp(filter, "i");
    return allTeams?.filter((team) => regex.test(team.name)).slice(0, 10) ?? [];
  }, [filter, allTeams]);

  const loading = allTeamsSWR.isLoading || competitorTeamsSWR.isLoading;

  return (
    <Container py="10">
      <Stack gap={5}>
        <Heading textAlign="center">Football Data Assignment</Heading>

        {loading ? (
          <LoadingIndicator />
        ) : selectedTeam ? (
          <TeamStatistics
            setSelectedTeam={setSelectedTeam}
            team={selectedTeam}
            competitorTeams={competitorTeams ?? []}
          />
        ) : (
          <TeamSearch
            filter={filter}
            teams={filteredTeams}
            setFilter={setFilter}
            setSelectedTeam={setSelectedTeam}
          />
        )}
      </Stack>
    </Container>
  );
};

export default Home;
