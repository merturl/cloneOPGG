import { delay } from 'redux-saga/effects';
const INPUTCHANGE = 'search/INPUTCHANGE';

export const inputChange = (name) => ({ type: INPUTCHANGE, name });

export function* inputChangeAsync() {
  yield delay(1000);
  console.log("hello");
}
const initialState = {
  name: '머털도사도탈모'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUTCHANGE:
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}
