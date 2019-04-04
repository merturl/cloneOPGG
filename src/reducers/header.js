import * as types from '../actions/ActionTypes';

const initialState = {
  visible: true,
  children: [
    {
      id:0,
      title: 'home',
    },
    {
      id:1,
      title: 'intro',
    },
    {
      id:2,
      title: 'post',
    }
  ]
}

function header(state = initialState, action) {
  switch (action.type) {
    case types.SET_HEADER_VISIBILITY:
      return {
        ...state,
        visible: action.visible
      }
    default:
      return state;
  }
}

export default header;
