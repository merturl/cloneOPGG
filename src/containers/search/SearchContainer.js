import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Search from '../../components/search/Search';
import * as authActions from 'store/modules/auth';
import * as searchActions from 'store/modules/search';
import * as summonerActions from 'store/modules/summoner';

class SearchContainer extends Component {
  componentDidMount() {
    const { history, checkUser } = this.props;
    checkUser();
    history.push('/');
  }
  handleInputChange(e) {
    const { inputChange } = this.props;
    inputChange(e.target.value);
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, search, inputChange } = this.props;
    search(name);
  };

  render() {
    const { name } = this.props;
    return (<Search name={name} onInputChange={this.handleInputChange.bind(this)} search={this.handleSubmit.bind(this)} />)
  }
}

const mapStateToProps = (state) => ({
  name: state.search.name,
})
//props에 dispatch 함수 할당
const mapDispatchToProps = (dispatch) => ({
  inputChange: (name) => dispatch(searchActions.inputChange(name)),
  search: (name) => dispatch(summonerActions.search(name)),
  checkUser: () => dispatch(authActions.check())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
