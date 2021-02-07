import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { IFormType } from "../@types/IForm";
import { Login } from "../components/Form/Login";
import { Register } from "../components/Form/Register";

export const Home = () => {
  const [type, setType] = useState<IFormType>("register");

  const onChangeType = (tupe: IFormType) => {
    setType(type);
  };

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} alignItems="center">
      <Box>
        <Image src="/images/cover.jpg" />
      </Box>
      <Box>
        <SimpleGrid columns={2}>
          <Box
            onClick={() => onChangeType("login")}
            cursor="pointer"
            border={"2px"}
            p={4}
            borderColor="ActiveBorder"
            textAlign="center"
          >
            Login
          </Box>

          <Box
            onClick={() => onChangeType("register")}
            cursor="pointer"
            border={"2px"}
            p={4}
            borderColor="ActiveBorder"
            textAlign="center"
          >
            Register
          </Box>
        </SimpleGrid>
        <Box>
          {type === "login" && <Login />}
          {type === "register" && <Register />}
        </Box>
      </Box>
    </SimpleGrid>
  );
};
