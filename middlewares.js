const fetch = require("node-fetch")

const delayActionMiddlewares=(store)=>(next)=>(action)=>{
    if(action.type === "todos/added"){
        console.log('I am dealy now');

        setTimeout(()=>{
            next(action)
        },2000)
       return 
    }
    return next(action)
}

const fetchTodoLoaded=(store)=>(next)=>async (action)=>{
  if(action.type === "todos/fetchLoaded"){
     const responsive = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
     const todos = await responsive.json();

     store.dispatch({
        type:"todos/loaded",
        payload:todos,
     })

     console.log(`todos data : ${store.getState().todos.length}`);
     return;
  }

  return next(action)
}

module.exports = {
    delayActionMiddlewares,
    fetchTodoLoaded
}