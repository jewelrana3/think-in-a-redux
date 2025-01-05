import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const statusChange = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
export const colorChange = (colorId) => {
  return {
    type: COLORCHANGED,
    payload: colorId,
  };
};
 