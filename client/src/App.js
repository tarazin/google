import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

const App = () => {
  return (
    <Router>
      <div>
        <StoreProvider>
          <NavBar />
          <Jumbotron />
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  )
}

export default App;
