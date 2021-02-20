import { createContext, useReducer } from 'react'

const initialState = {todos: [[{id: 1, description: 'hello'}, {id: 2, description: 'bye'}]], count: 0, banana: false};
export const store = createContext(initialState);
// const store = createContext(initialState);
const { Provider } = store;

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16
function todoReducer(state, action){
    switch(action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]}
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'INCREMENT_COUNT_BY':
            // alert('hello ')
            return {...state, count: state.count + action.payload}
        case 'DELETE_TODO':
            console.log (state, action)
            // return {...state, todos: state.todos.filter(item=> item.id==action.payload)}

        default:
          throw new Error();
      };
  

}

const StateProvider = ( { children } ) => {
                                            // {type: 'ADD_TODO', payload: 'hello'}
  const [state, dispatch] = useReducer(todoReducer, initialState) 
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
export default StateProvider 