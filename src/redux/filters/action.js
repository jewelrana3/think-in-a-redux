import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const statusChange = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
export const colorChange = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
