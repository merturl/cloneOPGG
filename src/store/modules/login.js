const INPUTCHANGE = 'login/INPUTCHANGE';
const LOGIN_PENDING = 'login/LOGIN_PENDING';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
const SUBMIT = 'login/SUBMIT';

import { auth } from "lib/api/auth";

export const submit = () => (dispatch) => {
  dispatch({ type: LOGIN_PENDING })

  auth()
    .then(
      (response) => {
        dispatch(
          {
            type: LOGIN_SUCCESS,
            payload: response,
          })
      })
    .catch(
      (error) => {
        dispatch(
          {
            type: LOGIN_FAILURE,
            payload: error
          });
      }
    )
}

export const inputChange = (text) => {
  return {
    type: INPUTCHANGE,
    payload: text
  }
}

const initialState = {
  username: '',
  password: ''
}

export default function reducer(state = initialState, action) {
  console.log("asdasd");
  switch (action.type) {
    case INPUTCHANGE:
      const { form, value } = action.payload;
      return {
        ...state,
        [form]: value
      }
    case SUBMIT:
      return {
        ...state,
        username: '',
        password: '',
      }
    case LOGIN_PENDING:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:

    default:
      return state;
  }
}
