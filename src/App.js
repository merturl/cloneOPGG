import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from "./containers/header/HeaderContainer";
import SearchContainer from "./containers/search/SearchContainer";
import LoginContainer from "./containers/login/LoginContainer";
import GameContainer from "./containers/game/GameContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route path="/" component={SearchContainer} />
        <GameContainer />
        <Route path="/login" component={LoginContainer} />
      </div>
    );
  }
}
export default App;
