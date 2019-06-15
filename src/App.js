import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from "./containers/header/HeaderContainer";
import SearchContainer from "./containers/search/SearchContainer";
import LoginContainer from "./containers/login/LoginContainer";
import MatchContainer from "./containers/match/MatchContainer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <Route exact path="/" component={SearchContainer} />
        <MatchContainer />
        <Route exact path="/login" component={LoginContainer} />
      </Fragment>
    );
  }
}
export default App;
