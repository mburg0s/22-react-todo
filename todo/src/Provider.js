import { createContext, useReducer } from 'react'

const initialState = {todos: []};
export const store = createContext(initialState);
const { Provider } = store;
const id = () => Math.random().toString() + '-' + Math.random().toString()
// let isCompleted = false
function todoReducer(state, action){
    switch(action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos,{id: id(), task: action.payload, isCompleted: false}]}
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        default:
          throw new Error();
      };

}

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(todoReducer, initialState) 
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
export default StateProvider 