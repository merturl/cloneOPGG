import React, {Component} from 'react';
import Login from '../../components/login/Login';
import * as actionsLogin from 'store/modules/login';
import * as actionsHeader from 'store/modules/header';
import { connect } from 'react-redux';

class LoginContainer extends Component {
  componentDidMount() {
    const { setHeaderVisibility } = this.props;
    setHeaderVisibility(false);
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
    username: state.login.username,
    password: state.login.password
});

const mapDispatchToProps = (dispatch) => ({
    onInputChange: (text) => dispatch(actionsLogin.inputChange(text)),
    onSubmit: () => dispatch(actionsLogin.submit()),
    setHeaderVisibility: (visible) => dispatch(actionsHeader.setHeaderVisibility(visible))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
