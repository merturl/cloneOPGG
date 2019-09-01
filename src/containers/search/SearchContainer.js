import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Search from '../../components/search/Search';
import * as authActions from 'store/modules/auth';
import * as searchActions from 'store/modules/search';
import * as summonerActions from 'store/modules/summoner';

class SearchContainer extends Component {
  componentDidMount() {
    this.checkUser();
  }

  async checkUser() {
    const { checkUser, setUserTemp, history } = this.props;
    const loggedInfo = localStorage.getItem("userInfo");
    if (!loggedInfo) return;
    const userInfo = JSON.parse(loggedInfo);
    await setUserTemp({
      id: userInfo.id,
      username: userInfo.username,
      token: userInfo.token,
    });
    await checkUser();
    if (!this.props.logged) {
      history.push("/login");
    }
  }

  handleInputChange(e) {
    const { inputChange } = this.props;
    inputChange(e.target.value);
  };

  handleSubmit(e) {e
    e.preventDefault();
    const { name, search } = this.props;
    search(name);
  };

  render() {
    const { name } = this.props;
    return (<Search name={name} onInputChange={this.handleInputChange.bind(this)} search={this.handleSubmit.bind(this)} />)
  }
}

const mapStateToProps = (state) => ({
  name: state.search.name,
  logged: state.auth.logged,
})
//props에 dispatch 함수 할당
const mapDispatchToProps = (dispatch) => ({
  inputChange: (name) => dispatch(searchActions.inputChange(name)),
  search: (name) => dispatch(summonerActions.search(name)),
  checkUser: () => dispatch(authActions.checkUser()),
  setUserTemp: ({id, username, token}) => dispatch(authActions.setUserTemp({id, username, token})),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchContainer)
);
