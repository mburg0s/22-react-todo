import {useContext} from 'react'
import { store } from './Provider'
// import Footer from './Footer'

export default function Input (props) {
        const globalState = useContext(store)
        const { dispatch } = globalState

        function removeToDo(id) {
            dispatch({type: 'REMOVE_TODO', payload: id})
        }

        function completeTask(id) {

            dispatch({type: 'CHECK_TODO', payload: id})
        }

    return (
        
        <ul className="listTodoCon">
            {props.todos.map((todo) => ( 
            
                <li key = {todo.id} className={ todo.isComplete ? "strike labelCon" : "labelCon"}    >
                    <div>
                    <input type="radio"  
                        className="checkComplete" 
                        checked = {todo.isComplete}  
                        onClick = {() => completeTask(todo.id)}/>
                    </div>   
                    <div className="task"> {todo.task} </div>
                    <div>
                    <button className="btnDelete"  
                        key = {todo.id} 
                        onClick={() => removeToDo(todo.id)}>X</button>
                    </div>    
                </li>
            ))} 
            
        </ul>


    )
 }