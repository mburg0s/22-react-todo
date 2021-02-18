export default function todoList (props) {
   return (
   <ul>
    {props.todos.map(todo => <li>{todo}</li>)}
</ul>
   )

}