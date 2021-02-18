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
        // console.log(action)
        dispatch({type: 'INCREMENT'})
        dispatch({type: 'ADD_TODO', payload: text})
        setText('')
    }
    return (
        <div>
            {count}
            {text}
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </form>
                <TodoList  todos={todos}/>
            {/* <ul>
                {todos.map(todo => <li>{todo}</li>)}
            </ul> */}
        </div>
    )
}