import React, { Component } from 'react';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as authActions from 'store/modules/auth';

class HeaderContainer extends Component {
  handleLogout(e) {
    e.preventDefault();
    const { onLogout } = this.props;
    onLogout();
    localStorage.removeItem("userInfo");
    window.location.href = '/login';
    //it will be removed next time. because if it submit, page is changed. so we do not need to remove id and password
  }

  render() {
    const { visible, children } = this.props;
    if (!visible) return null;
    return (
      <Header children={children} onLogout={this.handleLogout.bind(this)}>
      </Header>
    );
  }
}
const mapStateToProps = (state) => ({
  visible: state.header.visible,
  children: state.header.children
})

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(authActions.logout()),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderContainer)
);
