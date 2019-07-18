const INPUTCHANGE = 'auth/INPUTCHANGE';
const SUBMIT = 'auth/SUBMIT';

const LOGIN_PENDING = 'auth/LOGIN_PENDING';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const CHECK_PENDING = 'auth/CHECK_PENDING';
const CHECK_SUCCESS = 'auth/CHECK_SUCCESS';
const CHECK_FAILURE = 'auth/CHECK_FAILURE';

import { auth as authAPI } from "lib/api/auth";

export const check = () => (dispatch, getState) => {
  const token = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).token : null;
  console.log(token);
}

export const submit = () => (dispatch, getState) => {
  const { auth } = getState();

  dispatch({ type: LOGIN_PENDING })

  authAPI(auth.username, auth.password)
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
  username: 'HEELO',
  password: 'asdasdasdasdasdasdqweqasdqweasdqdaqwds',
  logged: false,
  pending: false,
  error: false,
  userInfo: {
    token: '',
    user: {
      id: null,
      username: ''
    },
  },
}

export default function reducer(state = initialState, action) {
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
      return {
        ...state,
        pending: true,
        error: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.data,
        logged: true,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        error: true
      }

    default:
      return state;
  }
}
