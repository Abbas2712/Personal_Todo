import myDailyTodos from '../MyDailyTodos';
import './Sidebar.css'
import {Link} from 'react-router-dom'

const TodoListSidebar = ()=>{
    return (
        <div className="sidebar">
           <div className="logo">My Todos</div>
                <ul className="nav-links">
                    <li><Link to='/'>My Daily Todo</Link></li>
                    <li><Link to='importanttodos'>Important</Link></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
        </div>
    )
}

export default TodoListSidebar;