import { searchMatches } from "lib/api/match";

const FETCH_GET_PENDING = 'match/FETCH_GET_PENDING';
const FETCH_GET_SUCCESS = 'match/FETCH_GET_SUCCESS';
const FETCH_GET_FAILURE = 'match/FETCH_GET_FAILURE';

export const searchMatch = (matchId) => (dispatch) => {
  dispatch({ type: FETCH_GET_PENDING })

  searchMatches(matchId)
    .then(
      (response) => {
        dispatch(
          {
            type: FETCH_GET_SUCCESS,
            payload: response,
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
  matches: {},
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
      const {
        gameCreation,
        gameDuration,
        gameId,
        gameType,
        gameVersion,
        mapId,
        participantIdentities,
        participants,
        platformId,
        teams
      } = action.payload.data

      return {
        ...state,
        matches: {
          ...state.matches,
          [gameId]: {
            gameCreation,
            gameDuration,
            gameId,
            gameType,
            gameVersion,
            mapId,
            participantIdentities,
            participants,
            platformId,
            teams
          }
        }
        ,
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
