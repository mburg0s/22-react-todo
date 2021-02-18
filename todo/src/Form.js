
import {useContext, useState} from 'react'
import { store } from './Provider'
import Input from './Input'
export default function Todo() {
    const globalState = useContext(store)
    const [text, setText] = useState('')
    console.log(globalState.state)
    const todos = globalState.state.todos
    const count = globalState.state.count
    const { dispatch } = globalState;
    function handleSubmit(e) {
        e.preventDefault()
        const action = {type: 'ADD_TODO', payload: text}
        // console.log(action)
        dispatch({type: 'INCREMENT'})
        dispatch({type: 'ADD_TODO', payload: text})
        setText('')
    }
    return (
        <div className="mainContainer">
            {/* {count}
            {text} */}
            <h1 className="titleCon">todos</h1>

            <form action="" onSubmit={handleSubmit}>
                 <input type="text" 
                    onChange={(e) => setText(e.target.value)} 
                    className="inputCon" 
                   placeholder="What needs to be done"
                   value = {text}
                />
            </form>
            <Input  todos={todos}/>

            {/* // <form action="" onSubmit={handleSubmit}>
            //     <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            // </form> */}
            {/* <ul>
                {todos.map(todo => <li>{todo}</li>)}
            </ul> */}
        </div>
    )
}




// import { createContext, useContext, useReducer, useState } from 'react'
// import Footer from './Footer'

// const initialState = {todos: []};
// const store = createContext(initialState);
// const { Provider } = store;


// const StateProvider = ( { children } ) => {
//   const [state, dispatch] = useReducer((state, action) => {
//     switch(action.type) {
//       case 'ADD_TODO':
//           return {...state, todos: [...state.todos, action.payload]}
//       case 'REMOVE_TODO':
//           return {}  
//       default:
//         throw new Error();
//     };
//   }, initialState);
//   return <Provider value={{ state, dispatch }}>{children}</Provider>
// }

// function Child() {
//     const globalState = useContext(store)
//     const [text, setText] = useState('')
//     const todos = globalState.state.todos
//     const { dispatch } = globalState;
//     function handleSubmit(e) {
//         e.preventDefault()
//         if (text) {
//             console.log(text)
//             console.log(e, 'e')
//             const action = {type: 'ADD_TODO', payload: text}
//             setText('')
//             dispatch(action)
//         }    
//     }
//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" 
//                     onChange={(e) => setText(e.target.value)} 
//                     className="inputCon" 
//                    placeholder="What needs to be done"
//                    id = 'inpTD'
//                    value = {text}
//                 />
//             </form>
//             <ul className="listTodoCon">
//                 {todos.map((todo) => (
//                 <p className="labelCon">{todo}</p>
//                 ))}
//             </ul>
//             <Footer />
//         </div>
//     )
// }

// export default function Form() {
//     return <StateProvider>
//         <Child />
//     </StateProvider>
// }




