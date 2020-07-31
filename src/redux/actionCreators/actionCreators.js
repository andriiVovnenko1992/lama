import { GET_ALL_JOBS, GET_JOB } from "../actionTypes/actionTypes";

export const getAllJobs = () => ({ type: GET_ALL_JOBS });
export const getCurrentJob = (data) => ({ type: GET_JOB, payload: data });