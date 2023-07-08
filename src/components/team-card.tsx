import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Team } from "@/utils/types";

export const TeamCard = ({
  team,
  onSelect,
}: {
  team: Team;
  onSelect?: () => void;
}) => {
  return (
    <Card overflow="hidden" variant="outline">
      <CardHeader>
        <Stack direction="row" gap={5}>
          <Image
            objectFit="cover"
            w="80px"
            h="80px"
            fallbackSrc="placeholder.png"
            src={team.crest}
          />

          <Stack mt={2}>
            <Heading size="md">{team.name}</Heading>
            {!!team.website && (
              <Link color="blue.500" href={team.website} target="_blank">
                {team.website} <ExternalLinkIcon />
              </Link>
            )}
          </Stack>
        </Stack>
      </CardHeader>

      <CardBody>
        <Stack gap={5}>
          <Text>
            <b>Address: </b>
            {team.address ?? "unknown"}
          </Text>
          <Text>
            <b>Founded in:</b> {team.founded ?? "unknown"}
          </Text>
          {onSelect && (
            <Button
              onClick={onSelect}
              size="sm"
              rightIcon={<ArrowForwardIcon />}
            >
              See statistics
            </Button>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
