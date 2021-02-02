import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import { Login } from "./Login";

export const Home = () => {
  return (
    <SimpleGrid columns={[1, 2]}>
      <Box>
        <Image src="/images/cover.jpg" />
      </Box>
      <Login />
    </SimpleGrid>
  );
};
