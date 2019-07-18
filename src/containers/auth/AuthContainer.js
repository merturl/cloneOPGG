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
          token: this.props.userInfo.token,
          user: {
            id: this.props.userInfo.user.id,
            username: this.props.userInfo.user.username,
          }
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
    const input = { form: e.target.name, value: e.target.value };
    onInputChange(input);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit();
    //it will be removed next time. because if it submit, page is changed. so we do not need to remove id and password
  }

  render() {
    const {username, password} = this.props;
    return (
      <Login 
        username={username}
        password={password}
        onInputChange={this.handleInputChange.bind(this)}
        onSubmit={this.handleSubmit.bind(this)} 
      />
    )
  }
}

const mapStateToProps = (state) => ({
    username: state.auth.username,
    password: state.auth.password,
    userInfo: state.auth.userInfo,
    logged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
    onInputChange: (text) => dispatch(authActions.inputChange(text)),
    onSubmit: () => dispatch(authActions.submit()),
    setHeaderVisibility: (visible) => dispatch(headerActions.setHeaderVisibility(visible))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthContainer)
);
