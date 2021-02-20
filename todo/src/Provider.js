import { createContext, useReducer } from 'react'

const initialState = {todos: [],complete: [], active: [], all: []};
export const store = createContext(initialState);
const { Provider } = store;

const id = () => Math.random().toString() + '-' + Math.random().toString()
function todoReducer(state, action){
    switch(action.type) {
    
        case 'ADD_TODO':
            const addT = [...state.todos,{id: id(), task: action.payload, isComplete: false}]
                    // state.active = {...state, active: addT}
                    // ({...state, active: addT})
                    // console.log(state, 'state')
            return {...state, todos: addT,active: addT, complete: addT, all: addT}
        case 'REMOVE_TODO':

            const removeT = state.todos.filter(item=> item.id!==action.payload)
            // state.active = {...state, active: removeT}
            return {...state, todos: removeT, active: removeT, complete: removeT, all: removeT}

        case 'CHECK_TODO' :
            // console.log('check', state.complete)
            const newTodo = state.todos.map(item => {
                if (item.id == action.payload) {
                   const newT= {...item, isComplete:!item.isComplete}
                    return newT
                    } 
                return item
        })
        // state.active = {...state, todos: newTodo,active: newTodo, complete: newTodo}
            // console.log(state, 'checked')
            return {...state, todos: newTodo,active: newTodo, ...state.complete, complete: newTodo, all: newTodo} 
        case 'ALL':
            // console.log('all', state.todos)
            return {...state, todos: state.all} 
        case 'ACTIVE':
            // console.log('hello', state.active)

                return {...state, todos: state.active.filter(item => !item.isComplete) }        
        case 'COMPLETED':
            console.log('complete', state.complete)
            return {...state, todos: state.complete.filter(item => item.isComplete) }    
                // return {completed: state.todos.filter(item => item.isComplete) }    
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