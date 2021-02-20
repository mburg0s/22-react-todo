import {useContext, useState} from 'react'
import { store } from './Provider'
import TodoList from './TodoList'
export default function Todo() {
    const globalState = useContext(store)
    const [text, setText] = useState('')
    // console.log(globalState)
    console.log(globalState.state)
    const todos = globalState.state.todos
    const count = globalState.state.count
    const { dispatch } = globalState;
    function handleSubmit(e) {
        e.preventDefault()
        const action = {type: 'ADD_TODO', payload: text}
        dispatch({type: 'INCREMENT'})
        dispatch({type: 'ADD_TODO', payload: text})
        setText('')
    }
    function handleClick(num) {
        // dispatch({type: 'INCREMENT_COUNT_BY', payload: 3})
        dispatch({type: 'DELETE_TODO', payload: num})

    }
    return (
        <div>
            {count}
            {text}
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </form>
                <TodoList  todos={todos}/>
                {/* <button onClick={handleClick}>Decrement </button> */}
                {/* <button onClick={handleClick}>Increment </button> */}
                {/* <button onClick={handleClick(1)}>Delete ID </button> */}


        </div>
    )
}