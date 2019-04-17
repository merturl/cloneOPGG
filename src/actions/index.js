import * as types from './ActionTypes';
import axios from 'axios';

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

function login(id, password) {
  return axios.post(`/api/auth`, {
    id, password
  })
}

export const submit = (id, password) => dispatch => {
  // 먼저, 요청이 시작했다는것을 알립니다
  dispatch({type: types.GET_POST_PENDING});

  // 요청을 시작합니다
  // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
  return login(id, password).then(
      (response) => {
          console.log(response);
          // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
          dispatch({
              type: types.GET_POST_SUCCESS,
              payload: response
          })
      }
  ).catch(error => {
      // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
      dispatch({
          type: types.GET_POST_FAILURE,
          payload: error
      });
  })

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

export const setHeaderVisibility = (visible) => {
  return {
    type: types.SET_HEADER_VISIBILITY,
    visible
  }
}
