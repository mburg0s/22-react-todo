import {useContext} from 'react'
import { store } from './Provider'

export default function Footer(props){
    const globalState = useContext(store)
    const { dispatch } = globalState

    return (
        props.count !== 0   
        ? <div className="footerCon">
            <span className="todoCount">{props.count} Left</span>
            <ul className="listFooter">
                <li><a href ="#" onClick = {() =>{dispatch({type: 'ALL'})}}>All</a></li>
                <li><a href ="#" onClick = {()=> {dispatch({type: 'ACTIVE'})}}>Active</a></li>
                <li><a href ="#" onClick = {()=> {dispatch({type: 'COMPLETED'})}}>Completed</a></li>
            </ul>
             
            <div>
            <a className = "clearComp" href ="#" onClick = {()=> {dispatch({type: 'CLEAR_COMPLETED'})}}>Clear Completed</a>

                {/* <a className = {props.compTrue ? "visible clearComp" :"clearComp invisible" } href ="#" onClick = {()=> {dispatch({type: 'CLEAR_COMPLETED'})}}>Clear Completed</a> */}
            </div>
        </div>
        :null

    ) 
    
}