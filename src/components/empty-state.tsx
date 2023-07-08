import { NotAllowedIcon } from "@chakra-ui/icons";
import { Center, Text } from "@chakra-ui/react";

export const EmptyState = ({ description }: { description: string }) => {
  return (
    <Center fontSize="2xl" opacity={0.5}>
      <NotAllowedIcon mr={2} />
      <Text>{description}</Text>
    </Center>
  );
};
