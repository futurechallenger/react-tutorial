import { action } from "./actionUtil";
import runWorker from "../services/workerService";

const WORKER_START = "WORKER_START";
const WORKER_FAILURE = "WORKER_FAILURE";
const WORKER_SUCCESS = "WORKER_SUCCESS";

export { WORKER_SUCCESS, WORKER_FAILURE, WORKER_START };

export default function run(data) {
  return async dispatch => {
    dispatch(action(WORKER_START));

    try {
      const ret = await runWorker();

      dispatch(action(WORKER_SUCCESS, ret));
    } catch (error) {
      dispatch(action(WORKER_FAILURE, error));
    }
  };
}
