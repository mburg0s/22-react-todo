
import {useContext, useState} from 'react'
import { store } from './Provider'
import Input from './Input'
import Footer from './Footer'
export default function Form() {
    const globalState = useContext(store)
    const [text, setText] = useState('')
    console.log(globalState.state)
    const todos = globalState.state.todos 
    // const complete = globalState.state.complete
    const active = globalState.state.active
    // const all = globalState.state.active

    const { dispatch } = globalState;
    function handleSubmit(e) {
        e.preventDefault()
        if (text) {
            dispatch({type: 'ADD_TODO', payload: text})
            setText('')
        }    
    }
    return (
        <div className="mainContainer">
            <h1 className="titleCon">todos</h1>

            <form action="" onSubmit={handleSubmit}>
                 <input type="text" 
                    onChange={(e) => setText(e.target.value)} 
                    className="inputCon" 
                   placeholder="What needs to be done"
                   value = {text}
                />
            </form>
            
            <Input  todos={todos}

            /> 
                <Footer count = {active.length} /> 

        </div>
    )
}