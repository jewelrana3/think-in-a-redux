/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import intialState from "./intialState";

const filterReducer = (state = intialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter((existingColor) => {
              return existingColor !== color;
            }),
          };

        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
