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
        // <div className="resultContainer">
        <ul className="listTodoCon resultContainer">
            {props.todos.map((todo) => ( 
            
                <li key = {todo.id} className={ todo.isComplete ? "strike labelCon" : "labelCon"}    >
                    <div className="listContainer">
                    <input type="radio"  
                        className="checkComplete" 
                        checked = {todo.isComplete}  
                        onClick = {() => completeTask(todo.id)}
                        />
                    </div>   
                    <div className="task"> {todo.task} </div>
                    <div>
                    <button className="btnDelete" 
                        key = {todo.id} 
                        onClick={() => removeToDo(todo.id)}
                        // onmouseout={document.querySelector('.labelCon').style.display = 'none'}
                        // onmouseover={document.querySelector('.labelCon') = 'display'} 

                        >X</button>
                    </div>    
                </li>
            ))} 
            
        </ul>
    // </div>            

    )
 }