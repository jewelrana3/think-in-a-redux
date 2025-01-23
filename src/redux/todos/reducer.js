/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import initialState from "./intialState";

const nextId = (todos) => {
  const maxId = todos.reduce((maxId,todo)=> Math.max(todo.id,maxId),-1)
  return maxId + 1;
};

const todosReducer = (state = initialState, action) => {
  console.log(action);
  
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextId(state),
          title:action.payload,
          complete:false
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          complete: !todo.complete,
        };
      });

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          complete: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.complete);

    default:
      return state;
  }
};

export default todosReducer;
