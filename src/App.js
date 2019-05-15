import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from "./containers/header/HeaderContainer";
import SearchContainer from "./containers/search/SearchContainer";
import LoginContainer from "./containers/login/LoginContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route path="/login" component={LoginContainer} />
        <Route path="/search" component={SearchContainer} />
      </div>
    );
  }
}
export default App;
