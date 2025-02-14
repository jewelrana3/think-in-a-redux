const store = require("./App/store");
const { counterActions } = require("./features/counter/counterSlice");

const {
  dynamicCounterSlice,
} = require("./features/dynamicCounter/dynamicCounterSlice");

const { fetchPosts } = require("./features/post/postSlice");

// console.log(`counter : ${JSON.stringify(store.getState())}`);

// subscribe
store.subscribe(() => {
  // console.log(store.getState());
});

// dispatch
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

store.dispatch(fetchPosts());

// dynamic counter slice
// store.dispatch(dynamicCounterSlice.increment(3));
// store.dispatch(dynamicCounterSlice.increment(4));
// store.dispatch(dynamicCounterSlice.decrement(2));
