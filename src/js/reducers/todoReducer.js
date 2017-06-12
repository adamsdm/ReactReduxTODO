export default function reducer(state={
    todos: [],
  }, action) {

    switch (action.type) {
      case "ADD_TODO": {
        return {...state, todos: state.todos.concat(action.payload)}
      }
      case "FETCH_TODOS": {
        return state
      }
      case "REMOVE_TODO": {

        var newTodos = state.todos.filter( (todo) => {
          
          // If current is the one clicked        
          if(action.payload===todo.text){

            // Check if it isn't resolved
            if(todo.resolved === false){
              todo.resolved=true;
              return true;
            }
            // If it already has been resolved -> remove it
            return false;
          }

          return true;
        })

        return { ...state, todos: newTodos }
      }
    }

    return state
}
