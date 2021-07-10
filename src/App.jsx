import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { MainPage } from "./components/mainPage/MainPage";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
