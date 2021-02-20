import { createContext, useReducer } from 'react'

const initialState = {todos: [],complete: [], active: [], all: []};
export const store = createContext(initialState);
const { Provider } = store;
let count =0

const id = () => Math.random().toString() + '-' + Math.random().toString()
function todoReducer(state, action){
    switch(action.type) {
    
        case 'ADD_TODO':
            const addT = [...state.todos,{id: id(), task: action.payload, isComplete: false}]
            return {...state, todos: addT,active: addT, complete: addT, all: addT}
        case 'REMOVE_TODO':
            count= count - 1            
            const removeT = state.todos.filter(item=> item.id!==action.payload)
            return {...state, todos: removeT, active: removeT, complete: removeT, all: removeT}

        case 'CHECK_TODO' :
            const newTodo = state.todos.map(item => {
                if (item.id == action.payload) {
                   const newT= {...item, isComplete:!item.isComplete}
                    return newT
                    } 
                return item
        })
            return {...state, todos: newTodo,active: newTodo, ...state.complete, complete: newTodo, all: newTodo} 
        case 'ALL':
            return {...state, todos: state.all} 
        case 'ACTIVE':

                return {...state, todos: state.active.filter(item => !item.isComplete) }        
        case 'COMPLETED':
            console.log('complete', state.complete)
            return {...state, todos: state.complete.filter(item => item.isComplete) }    
        case 'CLEAR_COMPLETED':
            const completeT = state.complete.filter(item => !item.isComplete)
            const allT = state.all.filter(item => !item.isComplete)
            const activeT = state.active.filter(item => !item.isComplete)
            const clearT = state.todos.filter(item => !item.isComplete)
            return {...state, todos: clearT, active: activeT, complete: completeT, all: allT}

        default:
          return state
      };
      
}

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(todoReducer, initialState) 
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
export default StateProvider 