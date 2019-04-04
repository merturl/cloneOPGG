import Counter from '../../components/counter/Counter';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../../utils';


const mapStateToProps =  (state) => ({
  color: state.counter.color,
  number: state.counter.number
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
      const color = getRandomColor(); // 임시
      dispatch(actions.setColor(color));
  }
})

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
