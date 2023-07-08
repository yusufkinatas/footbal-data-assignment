import { Stack, Text } from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";

import { StatisticRow } from "@/utils/types";

export const StatisticsSection = ({
  teamStatistics: { draw, lost, won, goalsFor, playedGames },
}: {
  teamStatistics: StatisticRow;
}) => {
  const averageGoals = Math.floor((goalsFor / playedGames) * 100) / 100;

  return (
    <Stack>
      <Text>
        <b>Average Goals:</b> {averageGoals}
      </Text>

      <Text fontWeight="bold">Games Played:</Text>
      <PieChart
        data={[
          { title: "Draw", value: draw, color: "orange" },
          { title: "Lost", value: lost, color: "red" },
          { title: "Won", value: won, color: "green" },
        ]}
        label={({ dataEntry }) => `${dataEntry.title} (${dataEntry.value})`}
        style={{
          width: 200,
          height: 200,
        }}
        labelPosition={60}
        labelStyle={{
          fontSize: "6px",
          fill: "white",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      />
    </Stack>
  );
};
