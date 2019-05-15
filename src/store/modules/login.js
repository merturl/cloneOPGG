const IDCHANGE = 'login/IDCHANGE';
const PASSWORDCHANGE = 'login/PASSWORDCHANGE';

export const idChange = (id) => {
  return {
    type: IDCHANGE,
    id
  }
}

export const passwordChange = (password) => {
  return {
    type: PASSWORDCHANGE,
    password
  }
}

const initialState = {
  id: '',
  password: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IDCHANGE:
      return {
        ...state,
        id: action.id
      }
    case PASSWORDCHANGE:
      return {
        ...state,
        password: action.password
      }
    default:
      return state;
  }
}
