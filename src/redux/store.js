import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Action ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upComming = [action].reduce(rootReducer, store.getState());
  console.log(`Upcoming State:${JSON.stringify(upComming)}`);

  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;
