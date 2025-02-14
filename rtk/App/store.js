const configureStore = require("@reduxjs/toolkit").configureStore;

const { counterReducer } = require("../features/counter/counterSlice");
const dynamicReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const postReducer = require("../features/post/postSlice");

const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
