import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import * as timerActions from 'store/modules/timer';
import * as headerActions from 'store/modules/header';

import Timers from 'components/timer/Timers';

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.onStartTimer = this.onStartTimer.bind(this);
    this.onRestartTimer = this.onRestartTimer.bind(this);
    this.onAddSecond = this.onAddSecond.bind(this);
  }

  componentDidMount() {
    const { setHeaderVisibility } = this.props;
    setHeaderVisibility(false);
  }

  onStartTimer(e, index) {
    e.preventDefault();
    const { startTimer } = this.props;
    startTimer(index);
  }
  onRestartTimer(e, index) {
    e.preventDefault();
    const { restartTimer } = this.props;
    restartTimer(index);
  }

  onAddSecond(index) {
    const { addSecond } = this.props;
    addSecond(index);
  }

  render() {
    const { timers } = this.props;
    return (<Timers timers={timers} onStartTimer={this.onStartTimer} onRestartTimer={this.onRestartTimer} onAddSecond={this.onAddSecond} />)
  }
}

const mapStateToProps = (state) => ({
  timers: state.timer.timers
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderVisibility: (visible) => dispatch(headerActions.setHeaderVisibility(visible)),
  startTimer: (index) => dispatch(timerActions.startTimer(index)),
  restartTimer: (index) => dispatch(timerActions.restartTimer(index)),
  addSecond: (index) => dispatch(timerActions.addSecond(index)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TimerContainer)
);
