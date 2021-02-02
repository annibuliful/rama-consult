import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { IFormType } from "../@types/IForm";
import { Login } from "../components/Form/Login";
import { Register } from "../components/Form/Register";

export const Home = () => {
  const [type, setType] = useState<IFormType>("login");

  const onChangeType = (tupe: IFormType) => {
    setType(type);
  };

  return (
    <SimpleGrid columns={[1, 2]}>
      <Box>
        <Image src="/images/cover.jpg" />
      </Box>
      {type === "login" && <Login />}
      {type === "register" && <Register />}
    </SimpleGrid>
  );
};
