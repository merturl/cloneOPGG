import * as types from '../actions/ActionTypes';


const initialState = {
  name: '',
}

function search(state = initialState, action) {
  switch (action.type) {
    case types.INPUTCHANGE:
        return {
          ...state,
          name: action.name
        }
    case types.SUBMIT:
        return {
          ...state,
        }
    default:
      return state;
  }
}


export default search
