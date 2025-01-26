// const {createStore,applyMiddleware} = require("redux")
// const {delayActionMiddlewares,fetchTodoLoaded} = require("./middlewares")

// // initialState
// const initialState = {
//     todos:[]
// }

// // reducer
// const todoReducer = (state=initialState,action)=>{
//     switch (action.type) {
//         case "todos/added":
//             return {
//                 ...state,
//               todos:[
//                 ...state.todos,
//                 {
//                   title:action.payload
//                 }
//                 ],
//             }

//             case "todos/loaded": 
//             return {
//                 ...state,
//                 todos:[...state.todos,...action.payload]
//             }

//             default :
//             return state;

//     }
// }

// // store
// const store = createStore(todoReducer,applyMiddleware(delayActionMiddlewares,fetchTodoLoaded));

// // subscribe
// store.subscribe(()=>{
//    console.log( store.getState());
   
// })

// // dispatch function
// // store.dispatch({
// //     type:"todos/added",
// //     payload:"Learn with redux"
// // })
// store.dispatch({
//     type:"todos/fetchLoaded",
// })

const {createStore,applyMiddleware} = require("redux");
const {delayActionMiddlewares,fetchAsyncMiddleware} = require("./middlewares");
const {fetchTodos} = require("./function")
const initialState = {
    todos:[]
}

// reducer
const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "todos/added":
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        title:action.payload
                    }
                ]
            }
            
         case "todos/todoLoaded":
            return {
                ...state,
                todos:[...state.todos,...action.payload]
            } 
    }
}

// store
const store =  createStore(reducer,applyMiddleware(fetchAsyncMiddleware))

// subscribe
store.subscribe(()=>{
    console.log(store.getState());
    
})

// dispatch
// store.dispatch({
//     type:"todos/added",
//     payload:"Learn with redux"
// })

store.dispatch(fetchTodos)