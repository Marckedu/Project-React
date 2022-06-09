import { useState, useEffect } from "react";
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import logo from "./assets/logo-spacex.png";
import * as API from "./services/launches";

export function App() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image m={4} src={logo} width={200} />
      <Heading as="h1" size="lg" m="4">
        SpaceX Launches
      </Heading>
      <ul>
        {launches.map((launch) => (
          <Box
            key={launch.flight_number}
            bg="gray.100"
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex>
              <Text fontSize="2x1">
                Mission <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={4} colorScheme="green">
                Success
              </Tag>
            </Flex>
            {launch.mission_name} ({launch.launch_year})
          </Box>
        ))}
      </ul>
    </>
  );
}
// function App() {
//   return <div>hola mundo</div>;
// }
