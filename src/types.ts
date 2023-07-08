export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address?: string;
  website: string;
  founded?: number;
  clubColors: string;
  venue: string;
  lastUpdated: Date;
}

export interface ResultSet {
  count: number;
  competitions: string;
  first: Date;
  last: Date;
  played: number;
  wins: number;
  draws: number;
  losses: number;
}

export interface StatisticRow {
  team: Team;
  won: number;
  draw: number;
  lost: number;
  goalsFor: number;
}

export interface Standing {
  type: "HOME" | "AWAY" | "TOTAL";
  table: StatisticRow[];
}
