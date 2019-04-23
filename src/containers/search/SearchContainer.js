import React, { Component } from 'react';
import Search from '../../components/search/Search';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class SearchContainer extends Component {
  handleInputChange(e) {
    const { inputChange } = this.props;
    inputChange(e.target.value);
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, search, inputChange } = this.props;
    search(name);
    inputChange('');
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
  inputChange: (name) => dispatch(actions.inputChange(name)),
  search: () => dispatch(actions.search()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
