import { Box } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { UserDashboard } from "./dashboard";

export const UserPage: FunctionComponent = () => {
  return (
    <Box>
      <Switch>
        <Route exact path={`/user/dashboard`} component={UserDashboard} />
      </Switch>
    </Box>
  );
};
