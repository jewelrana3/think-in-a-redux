const configureStore = require("@reduxjs/toolkit").configureStore;

const { counterReducer } = require("../features/counter/counterSlice");
const dynamicCounterSlice = require("../features/dynamicCounter/dynamicCounterSlice");

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterSlice,
  },
});

module.exports = store;
