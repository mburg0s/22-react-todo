export default function todoList (props) {
    console.log(props.todos, 'store')

    return (
    <ul className="listTodoCon">
        {props.todos.map((todo) => ( 
        <li key = {todo.id} className="labelCon">{todo.task}
        <input type="checkbox" className="checkComplete" key = {todo.id} value = {todo.isCompleted} />
        </li>
        ))} 
    </ul>
    )
 
 }