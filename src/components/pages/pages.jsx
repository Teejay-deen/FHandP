import React from "react";
import Header from "./components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";

const Pages = () => {
  return (
    <div>
      {/* <Router>
        <Header />
        <Switch>

          <Route exact path="/" element={Home} />
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
};

export default Pages;
