import { combineReducers } from "redux";
import filterReducer from "../redux/filters/reducer";
import todosReducer from "../redux/todos/reducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  todos: todosReducer,
});

export default rootReducer;
