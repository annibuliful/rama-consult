import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserPendingPage } from "./pages/Pending";
import { UserDashboard } from "./pages/User/Dashboard";

const App: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pending">
        <UserPendingPage />
      </Route>
      <Route exact path="/user/dashboard">
        <UserDashboard />
      </Route>
    </Switch>
  </Router>
);
export default App;
