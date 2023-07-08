import { Stack } from "@chakra-ui/react";

import { Team } from "@/utils/types";

import { EmptyState } from "./empty-state";
import { TeamCard } from "./team-card";

export const TeamList = ({
  teams,
  setSelectedTeam,
}: {
  teams: Team[];
  setSelectedTeam: (team: Team) => void;
}) => {
  return (
    <Stack gap={5}>
      {teams.length ? (
        teams.map((team) => (
          <TeamCard
            onSelect={() => setSelectedTeam(team)}
            team={team}
            key={team.id}
          />
        ))
      ) : (
        <EmptyState description="No teams found" />
      )}
    </Stack>
  );
};
