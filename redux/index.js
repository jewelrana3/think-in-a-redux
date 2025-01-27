const { increment, decrement } = require("./counter/action");
const store = require("./store");

// Subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
