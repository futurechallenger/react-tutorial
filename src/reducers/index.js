import { combineReducers } from "redux";
import { CHANGE_COLOR } from "../actions";
import request from './request';
import workerReducer from './workerReducer';

const initState = {
  color: "red"
};

function changeColor(state = initState, action = {}) {
  switch (action.type) {
    case CHANGE_COLOR: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}

// const a = {b};  // a = {b:b}

export default combineReducers({
  color: changeColor, // result: color: {color: 'red'},
  request,
  parser: workerReducer,
})
