import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Dashboard from './pages/dashboard';
import Job from './components/Job/Job';
import JobList from './components/JobList/JobList'
import NotFound from "./components/NotFound/NotFound";
import CcDefaultTheme from "./theme/cc_default";
import { ThemeProvider } from "@material-ui/core"

function App() {
  return (
    <ThemeProvider theme={CcDefaultTheme}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/job">
            <Job></Job>
          </Route>
          <Route path="/jobs">
            <JobList></JobList>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
