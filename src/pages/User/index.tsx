import { Box } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { UserDashboard } from "./dashboard";

export const UserPage: FunctionComponent = () => {
  const { path, url } = useRouteMatch();
  console.log("asdasdasd", path);
  return (
    <Box>
      <Switch>
        <Route exact path={`${path}/dashboard`} component={UserDashboard} />
      </Switch>
    </Box>
  );
};
