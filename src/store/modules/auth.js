const INPUTCHANGE = 'auth/INPUTCHANGE';

const LOGIN_PENDING = 'auth/LOGIN_PENDING';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const CHECK_PENDING = 'auth/CHECK_PENDING';
const CHECK_SUCCESS = 'auth/CHECK_SUCCESS';
const CHECK_FAILURE = 'auth/CHECK_FAILURE';

const LOGOUT_PENDING = 'auth/LOGOUT_PENDING';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

const SET_USER_TEMP = "auth/SET_USER_TEMP";

import * as authAPI from "lib/api/auth";

export const checkUser = () => (dispatch, getState) => {
  dispatch({ type: CHECK_PENDING })
  authAPI.checkLogin()
  .then(
    (response) => {
      dispatch(
        {
          type: CHECK_SUCCESS,
          payload: response.data,
        })
    })
  .catch(
    (error) => {
      dispatch(
        {
          type: CHECK_FAILURE,
          payload: error
        });
    }
  )
}

export const logout = () => (dispatch, getState) => {
  dispatch({ type: LOGOUT_PENDING });
  authAPI.logout()
    .then(
      (response) => {
        dispatch(
          {
            type: LOGOUT_SUCCESS,
            payload: response,
          })
      })
    .catch(
      (error) => {
        dispatch(
          {
            type: LOGOUT_FAILURE,
            payload: error
          });
      }
    )
}

export const login = () => (dispatch, getState) => {
  const { auth } = getState();
  dispatch({ type: LOGIN_PENDING })

  authAPI.login(auth.form.username, auth.form.password)
    .then(
      (response) => {
        dispatch(
          {
            type: LOGIN_SUCCESS,
            payload: response.data,
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

export const setUserTemp = ({ id, username, token }) => ({
  type: SET_USER_TEMP,
  payload: {
    id,
    username,
    token
  }
});

export const inputChange = ({ name, value }) => {
  return {
    type: INPUTCHANGE,
    payload: {
      name,
      value
    }
  }
}

const initialState = {
  form: {
    username: 'HEELO',
    password: 'asdasdasdasdasdasdqweqasdqweasdqdaqwds',
  },
  logged: false,
  pending: false,
  error: false,
  userInfo: {
    id: null,
    username: '',
    token: '',
  },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUTCHANGE:
      const { name, value } = action.payload;
      let newForm = state.form;
      newForm[name] = value;
      return {
        ...state,
        form: newForm,
      }
    case SET_USER_TEMP:
      return {
        ...state,
        logged: true,
        userInfo: {
          id: action.payload.id,
          username: action.payload.username,
          token: action.payload.token
        }
      };
    case CHECK_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
      }
    case CHECK_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state,
          id: action.payload.user.id,
          username: action.payload.user.username,
        },
        logged: true,
      }
    case CHECK_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
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
        userInfo: {
          id: action.payload.user.id,
          username: action.payload.user.username,
          token,
        },
        logged: true,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
      }
    case LOGOUT_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userInfo: {},
        logged: false,
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
      }
    default:
      return state;
  }
}
