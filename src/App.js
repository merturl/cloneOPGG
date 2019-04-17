import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from "./containers/header/HeaderContainer";
import CounterContainer from "./containers/counter/CounterContainer";
import SearchContainer from "./containers/search/SearchContainer";
import SidemneuContainer from "./containers/sidemenu/SidemenuContainer";
import LoginContainer from "./containers/login/LoginContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Route exact path="/" component={a} />
        <Route path="/login" component={LoginContainer} />
      </div>
    );
  }
}

const a = () => {
  return(
    <dis>hello</dis>
  )
}
export default App;
