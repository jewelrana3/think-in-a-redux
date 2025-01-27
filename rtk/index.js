const store = require("./App/store");
const { counterActions } = require("./features/counter/counterSlice");

console.log(`counter : ${JSON.stringify(store.getState())}`);

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());
