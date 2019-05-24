import {START_REQUEST, SUCCESS_REQUEST, FAILURE_REQUEST} from '../actions';

const initState = {
  loading: 'init',
}

export default function request(state = initState, action = {}) {
  switch(action.type) {
    case START_REQUEST: {
      return {
        ...state,
        loading: 'loading',
      }
    }
    case SUCCESS_REQUEST: {
      return {
        ...state,
        ...action.payload,
        loading: 'done',
      }
    }
    case FAILURE_REQUEST: {
      return {
        ...state,
        ...action.payload,
        loading: 'failure',
      }
    }
    default: {
      return state;
    }
  }
}