import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { Team } from "@/utils/types";

import { TeamList } from "./team-list";

export const TeamSearch = ({
  teams,
  filter,
  setFilter,
  setSelectedTeam,
}: {
  filter: string;
  setFilter: (val: string) => void;
  teams: Team[];
  setSelectedTeam: (team: Team) => void;
}) => {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={filter}
          onChange={(event) => setFilter(event.currentTarget.value)}
          placeholder="Search a football team"
        />
      </InputGroup>

      <TeamList teams={teams} setSelectedTeam={setSelectedTeam} />
    </>
  );
};
