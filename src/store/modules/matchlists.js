import { searchMatchlistsByAccount } from "lib/api/match";
const FETCH_GET_PENDING = 'matchlists/FETCH_GET_PENDING';
const FETCH_GET_SUCCESS = 'matchlists/FETCH_GET_SUCCESS';
const FETCH_GET_FAILURE = 'matchlists/FETCH_GET_FAILURE';

export const searchMatchList = (accountId) => (dispatch) => {
  dispatch({ type: FETCH_GET_PENDING })

  return searchMatchlistsByAccount(accountId)
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
  data: {
    endIndex: null,
    matches: [],
    startIndex: null,
    totalGames: null,
  },
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
      const { endIndex, matches, startIndex, totalGames } = action.payload.data;
      return {
        ...state,
        data: { 
          endIndex,
          matches,
          startIndex,
          totalGames
        },
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
