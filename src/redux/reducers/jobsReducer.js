import {GET_ALL_JOBS, GET_JOB} from "../actionTypes/actionTypes";
import { jobs } from "./data";

const initialState = {
  jobs: jobs,
  job: {},
  loading: false,
  error: false,
};

const jobsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_JOBS:
      return state;

    case GET_JOB:
      return { ...state, job: state.jobs.find(({ id }) => Number(id) === Number(payload)) };

    default:
      return state;
  }
};

export default jobsReducer;