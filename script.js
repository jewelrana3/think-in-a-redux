// element id
const incrementEL = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counter = document.getElementById("counter");
// crearte initial state
const initialState = {
  counter: 0,
};

//  action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

// crete action
function increment() {
  return {
    type: INCREMENT,
    payload: 4,
  };
}

function decrement() {
  return {
    type: DECREMENT,
    payload: 3,
  };
}

// reducer function create
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      counter: state.counter - action.payload,
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
incrementEL.addEventListener("click", () => {
  store.dispatch(increment());
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement());
  console.log(store);
});
