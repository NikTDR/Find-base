import { initState } from "../initState";

export const findParamsReducers = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_PARAMS':
      return payload;
    default:
      return state;
  }
}
