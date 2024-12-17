import { DDECREMENT, DINCREMENET } from "./AtionTypes";

const initialState = {
  value: 0,
};

const DynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENET:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default DynamicCounterReducer;
