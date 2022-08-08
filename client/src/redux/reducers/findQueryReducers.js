import { initState } from "../initState";

export const findQueryReducers = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_QUERY':
      return payload;
    default:
      return state;
  }
}
