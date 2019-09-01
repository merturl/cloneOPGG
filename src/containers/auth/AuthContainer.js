import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Login from '../../components/login/Login';
import * as authActions from 'store/modules/auth';
import * as headerActions from 'store/modules/header';

class AuthContainer extends Component {
  componentDidMount() {
    const { setHeaderVisibility, history, logged } = this.props;
    setHeaderVisibility(false);
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, logged } = this.props;
    if (prevProps.logged !== logged && logged) {
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          id: this.props.userInfo.id,
          username: this.props.userInfo.username,
          token: this.props.userInfo.token
        })
      );
      history.push('/');
    }
  }

  componentWillUnmount() {
    const { setHeaderVisibility } = this.props;
    setHeaderVisibility(true);
  }

  handleInputChange(e) {
    const { onInputChange } = this.props;
    const { name, value } = e.target;
    onInputChange({name, value});
  }

  handleLogin(e) {
    e.preventDefault();
    const { onLogin } = this.props;
    onLogin();
    //it will be removed next time. because if it Login, page is changed. so we do not need to remove id and password
  }

  render() {
    const {username, password} = this.props;
    return (
      <Login 
        username={username}
        password={password}
        onInputChange={this.handleInputChange.bind(this)}
        onLogin={this.handleLogin.bind(this)} 
      />
    )
  }
}

const mapStateToProps = (state) => ({
    username: state.auth.form.username,
    password: state.auth.form.password,
    userInfo: state.auth.userInfo,
    logged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
    onInputChange: ({name, value}) => dispatch(authActions.inputChange({ name, value })),
    onLogin: () => dispatch(authActions.login()),
    setHeaderVisibility: (visible) => dispatch(headerActions.setHeaderVisibility(visible))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthContainer)
);
