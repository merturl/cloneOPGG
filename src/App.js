import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from "./containers/header/HeaderContainer";
import SearchContainer from "./containers/search/SearchContainer";
import LoginContainer from "./containers/login/LoginContainer";
import MatchContainer from "./containers/match/MatchContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route path="/" component={SearchContainer} />
        <MatchContainer />
        <Route path="/login" component={LoginContainer} />
      </div>
    );
  }
}
export default App;
