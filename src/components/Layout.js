import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Content from "./Content";
import Popup from "./Popup";
import Lorem from "./Lorem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/home" exact component={Content} />
              <Route path="/Lorem" component={Lorem} />
            </Switch>
          </div>
        </Router>

        <Footer />
      </>
    );
  }
}

export default Layout;
