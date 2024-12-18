import rootReducer from "../rootReducer";

// create first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upComming = [action].reduce(rootReducer, store.getState());
  console.log(`Upcoming:${JSON.stringify(upComming)}`);

  //   next pass
  return next(action);
};

export default myLogger;
