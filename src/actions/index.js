import fetchServer from "../services";

export const CHANGE_COLOR = "CHANGE_COLOR";

/**
 * `type` is a must have
 * @param {*} payload
 */
export default function changeColorAction(payload = {}) {
  return {
    type: CHANGE_COLOR,
    payload // {color: 'yellow'}
  };
}

const START_REQUEST = "START_REQUEST";
const SUCCESS_REQUEST = "SUCCESS_REQUEST";
const FAILURE_REQUEST = "FAILURE_REQUEST";

export { START_REQUEST, SUCCESS_REQUEST, FAILURE_REQUEST };

function action(type, payload) {
  return { type, payload };
}

export function requestServer() {
  return async dispatch => {
    dispatch(action(START_REQUEST));

    try {
      const ret = await fetchServer();
      if (!ret) {
        dispatch(action(FAILURE_REQUEST, { msg: "Something wrong!" }));
        return;
      }

      dispatch(action(SUCCESS_REQUEST, { ret }));
    } catch (e) {
      dispatch(action(FAILURE_REQUEST, { msg: "Something wrong!" }));
      return;
    }
  };
}
