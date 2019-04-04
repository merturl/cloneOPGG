import * as types from './ActionTypes';


export const increment = () => {
  return {
    type: types.INCREMENT
  }
}

export const incrementAsync = () => dispatch => {
  // 1초 뒤 액션 디스패치
  setInterval(
      () => { dispatch(increment()) },
      1000
  );
}

export const decrement = () => {
  return {
    type: types.DECREMENT
  }
}

export const setColor = (color) => {
  return {
    type: types.SET_COLOR,
    color
  }
}

export const inputChange = (name) => {
  return {
    type: types.INPUTCHANGE,
    name
  }
}

export const submit = () => {
  return {
    type: types.SUBMIT,
  }
}

export const idChange = (id) => {
  return {
    type: types.IDCHANGE,
    id
  }
}

export const passwordChange = (password) => {
  return {
    type: types.PASSWORDCHANGE,
    password
  }
}

export const login = () => {
  return {
    type: types.LOGIN
  }
}

export const setHeaderVisibility = (visible) => {
  return {
    type: types.SET_HEADER_VISIBILITY,
    visible
  }
}
