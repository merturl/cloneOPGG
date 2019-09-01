import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from "./containers/header/HeaderContainer";
import SearchContainer from "./containers/search/SearchContainer";
import AuthContainer from "./containers/auth/AuthContainer";
import MatchContainer from "./containers/match/MatchContainer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={SearchContainer} />
          <Route exact path="/login" component={AuthContainer} />
        </Switch>
        <MatchContainer />
      </Fragment>
    );
  }
}
export default App;
