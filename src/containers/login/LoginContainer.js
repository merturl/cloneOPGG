import React, {Component} from 'react';
import Login from '../../components/login/Login';
import * as actions from '../../actions';
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

  handleIdChange(e) {
    const { onIdChange } = this.props;
    onIdChange(e.target.value);
  }

  handlePasswordChange(e) {
    const { onPasswordChange } = this.props
    onPasswordChange((e.target.value));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onIdChange, onPasswordChange, onSubmit, id, password } = this.props;

    onSubmit(id, password);
    //it will be removed next time. because if it submit, page is changed. so we do not need to remove id and password
    onIdChange('');
    onPasswordChange('');
  }

  render() {
    const {id, password} = this.props;
    return (
      <Login 
        id={id}
        password={password}
        onIdChange={this.handleIdChange.bind(this)} 
        onPasswordChange={this.handlePasswordChange.bind(this)} 
        onSubmit={this.handleSubmit.bind(this)} 
      />
    )
  }
}

const mapStateToProps = (state) => ({
    id: state.login.id,
    password: state.login.password
});

const mapDispatchToProps = (dispatch) => ({
    onIdChange: (id) => dispatch(actions.idChange(id)),
    onPasswordChange: (password) => dispatch(actions.passwordChange(password)),
    onSubmit: (id ,password) => dispatch(actions.submit(id, password)),
    setHeaderVisibility: (visible) => dispatch(actions.setHeaderVisibility(visible))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
