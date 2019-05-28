import { searchSummonerByName } from "lib/api/summoner";

const FETCH_GET_PENDING = 'summoner/FETCH_GET_PENDING';
const FETCH_GET_SUCCESS = 'summoner/FETCH_GET_SUCCESS';
const FETCH_GET_FAILURE = 'summoner/FETCH_GET_FAILURE';

export const search = (name) => (dispatch) => {
  dispatch({ type: FETCH_GET_PENDING })

  searchSummonerByName(name)
    .then(
      (response) => {
        dispatch(
          {
            type: FETCH_GET_SUCCESS,
            payload: response
          })
      })
    .catch(
      (error) => {
        dispatch(
          {
            type: FETCH_GET_FAILURE,
            payload: error
          });
      }
    )
}

const initialState = {
  pending: false,
  error: false,
  data: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
      }
    case FETCH_GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      }
    case FETCH_GET_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
      }
    default:
      return state;
  }
}