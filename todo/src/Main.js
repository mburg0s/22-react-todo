// import Form from './Form.js'

// export default function Main() {
//     return (
//         <div className="mainContainer"> 
//             <h1 className="titleCon">todos</h1>
//             <Form />
//         </div>
//     )
// }



import StateProvider from './Provider'
import Form from './Form'
import TodoApp from './todo/TodoApp'

export default function Main() {
    return <StateProvider>
        <Form />
        {/* <TodoApp /> */}
    </StateProvider>
}