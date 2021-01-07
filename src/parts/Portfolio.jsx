import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./portfolio/Home";
import Admin from "./portfolio/Admin";
import NoMatch from "./portfolio/NoMatch";
import Post from "./portfolio/Post";

const Portfolio = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/404" component={NoMatch} />
        <Route path="/:slug" component={Post} />
      </Switch>
    </Router>
  );
};

export default Portfolio;
