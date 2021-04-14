import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserPendingPage } from "./pages/Pending";
import { ConultationForm } from "./pages/User/Consultation";
import { UserDashboard } from "./pages/User/Dashboard";
import "./date-picker.css";
import "react-datepicker/dist/react-datepicker.css";

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
      <Route exact path="/user/create-new">
        <ConultationForm />
      </Route>
    </Switch>
  </Router>
);
export default App;
