const SET_HEADER_VISIBILITY = 'SET_HEADER_VISIBILITY';

const initialState = {
  visible: true,
  children: [
    {
      id:0,
      title: 'HOME',
    },
    {
      id:1,
      title: 'INTRO',
    },
    {
      id:2,
      title: 'POST',
    }
  ]
}

export const setHeaderVisibility = (visible) => {
    return {
      type: SET_HEADER_VISIBILITY,
      visible
    }
  }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_HEADER_VISIBILITY:
      return {
        ...state,
        visible: action.visible
      }
    default:
      return state;
  }
}
