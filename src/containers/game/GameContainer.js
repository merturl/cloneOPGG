import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameContainer extends Component {
  render() {
    const { data } = this.props;
    console.log(data.name);
    return (
      <div>
        <div>{data.name}</div>
        <div>{data.summonerLevel}</div>
        <div>{data.revisionDate}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.fetchget.data,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
