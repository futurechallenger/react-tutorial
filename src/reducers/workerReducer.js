import {
  WORKER_START,
  WORKER_FAILURE,
  WORKER_SUCCESS,
} from "../actions/workerActions";

const initState = {
  loading: "init"
};

export default function workerReducer(state = initState, action = {}) {
  switch (action.type) {
    case WORKER_START: {
      return {
        ...state,
        loading: "loading"
      };
    }
    case WORKER_SUCCESS: {
      return {
        ...state,
        loading: "done"
      };
    }
    case WORKER_FAILURE: {
      return {
        ...state,
        loading: "failed"
      };
    }
    default:
      return state;
  }
}
