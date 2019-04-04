import * as types from '../actions/ActionTypes';

const initialState = {
  id: '',
  password: ''
}

function login(state = initialState, action) {
  switch (action.type) {
    case types.IDCHANGE:
      return {
        ...state,
        id: action.id
      }
    case types.PASSWORDCHANGE:
      return {
        ...state,
        password: action.password
      }
    default:
      return state;
  }
}

export default login;
