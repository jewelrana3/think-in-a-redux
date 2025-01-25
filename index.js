const {createStore,applyMiddleware} = require("redux")
const {delayActionMiddlewares,fetchTodoLoaded} = require("./middlewares")

// initialState
const initialState = {
    todos:[]
}

// reducer
const todoReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "todos/added":
            return {
                ...state,
              todos:[
                ...state.todos,
                {
                  title:action.payload
                }
                ],
            }

            case "todos/loaded": 
            return {
                ...state,
                todos:[...state.todos,...action.payload]
            }

            default :
            return state;

    }
}

// store
const store = createStore(todoReducer,applyMiddleware(delayActionMiddlewares,fetchTodoLoaded));

// subscribe
store.subscribe(()=>{
   console.log( store.getState());
   
})

// dispatch function
// store.dispatch({
//     type:"todos/added",
//     payload:"Learn with redux"
// })
store.dispatch({
    type:"todos/fetchLoaded",
})