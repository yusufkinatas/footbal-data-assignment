import { Stack, Text, Theme, useTheme } from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";

import { StatisticRow } from "@/utils/types";

export const StatisticsSection = ({
  teamStatistics: { draw, lost, won, goalsFor, playedGames },
}: {
  teamStatistics: StatisticRow;
}) => {
  const averageGoals = Math.floor((goalsFor / playedGames) * 100) / 100;

  const { colors } = useTheme<Theme>();

  return (
    <Stack>
      <Text>
        <b>Average Goals:</b> {averageGoals}
      </Text>

      <Text fontWeight="bold">Games Played:</Text>
      <PieChart
        data={[
          { title: "Draw", value: draw, color: colors.yellow[500] },
          { title: "Lost", value: lost, color: colors.red[500] },
          { title: "Won", value: won, color: colors.green[500] },
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
