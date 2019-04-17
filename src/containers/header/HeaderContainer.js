import React, { Component } from 'react';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
  render() {
    const { visible, children } = this.props;
    if (!visible) return null;
    return (
      <Header children={children}>
      </Header>
    );
  }
}
const mapStateToProps = (state) => ({
  visible: state.header.visible,
  children: state.header.children
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
