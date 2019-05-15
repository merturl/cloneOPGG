import axios from 'axios';

const FETCH_GET_PENDING = 'fetchget/FETCH_GET_PENDING';
const FETCH_GET_SUCCESS = 'fetchget/FETCH_GET_SUCCESS';
const FETCH_GET_FAILURE = 'fetchget/FETCH_GET_FAILURE';

export const search = (name) => (dispatch) => {
    dispatch({ type: FETCH_GET_PENDING })

    return searchByName(name)
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

function searchByName(name) {
    const api_key = 'RGAPI-12d1f81f-4728-42bd-b9ed-0307da8f2abf';
    const username = name ? name : '뭐이런놈이다있어';
    const url = `/lol/summoner/v4/summoners/by-name/${username}?api_key=${api_key}`;
    return axios.get(url)
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
