// element id
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const counter = document.getElementById("counter");
// crearte initial state
const initialState = {
  counter: 0,
};

console.log("kkk");
// reducer function create
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else {
    return state;
  }
};

// create store
const store = Redux.createStore(counterReducer);

function render() {
  counter.innerHTML = store.getState().counter;
}

render();
store.subscribe(render);

// Initialize counter value
// counter.innerHTML = store.getState().counter;

// crete button
increment.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

decrement.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});
