import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from "./containers/header/HeaderContainer";
import CounterContainer from "./containers/counter/CounterContainer";
import SearchContainer from "./containers/search/SearchContainer";
import Sidemenu from "./components/sidemenu/Sidemenu";
import LoginContainer from "./containers/login/LoginContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route exact path="/" component={SearchContainer} />
        <Route exact path="/" component={CounterContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/sidemenu" component={Sidemenu} />
      </div>
    );
  }
}

export default App;
