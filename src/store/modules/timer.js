import { createAction, handleActions } from 'redux-actions';

const START_TIMER = 'timer/START_TIMER';
const RESTART_TIMER = 'timer/RESTART_TIMER';
const ADD_SECOND = 'timer/ADD_SECOND';


// const TIMER_DURATIONS = [150, 300, 360]; general, buff, epic
const TIMER_DURATION = 150;
const initialState = {
  timers: [
    {
      id: 0,
      name: 'Raptors',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 1,
      name: 'Wolves',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 2,
      name: 'Krugs',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 3,
      name: 'Gromp',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 4,
      name: 'Baron\nScuttler',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 5,
      name: 'Dragon\nScuttler',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 6,
      name: 'Blue\nSentinel',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 7,
      name: 'Red\nBrambleback',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 8,
      name: 'Dragon',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
    {
      id: 9,
      name: 'Baron\nNashor',
      isPlaying: false,
      elapsedTime: 0,
      timeDuration: TIMER_DURATION,
    },
  ]
}

export const startTimer = (id) => {
  return {
    type: START_TIMER,
    id
  }
}

export const restartTimer = (id) => {
  return {
    type: RESTART_TIMER,
    id
  }
}

export const addSecond = (id) => {
  return {
    type: ADD_SECOND,
    id
  }
}

export default handleActions({
  [START_TIMER]: (state, action) => {
    const { timers } = state;
    return {
      ...state,
      timers: [
        ...timers.slice(0, action.id),
        {
          ...timers[action.id],
          isPlaying: true,
        },
        ...timers.slice(action.id + 1, timers.length)
      ]
    }
  },
  [RESTART_TIMER]: (state, action) => {
    const { timers } = state;
    return {
      ...state,
      timers: [
        ...timers.slice(0, action.id),
        {
          ...timers[action.id],
          elapsedTime: 0,
          isPlaying: false,
        },
        ...timers.slice(action.id + 1, timers.length)
      ]
    }
  },
  [ADD_SECOND]: (state, action) => {
    const { timers } = state;
    if (timers[action.id].elapsedTime < TIMER_DURATION) {
      return {
        ...state,
        timers: [
          ...timers.slice(0, action.id),
          {
            ...timers[action.id],
            elapsedTime: timers[action.id].elapsedTime + 1,
          },
          ...timers.slice(action.id + 1, timers.length)
        ]
      }
    } else {
      return {
        ...state,
        timers: [
          ...timers.slice(0, action.id),
          {
            ...timers[action.id],
            isPlaying: false,
          },
          ...timers.slice(action.id + 1, timers.length)
        ]
      }
    }
    
  },
}, initialState);
