import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import myLogger from "./middlewares/myLogger";
import rootReducer from "./rootReducer";

// multiple redux middleware add here
const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;
