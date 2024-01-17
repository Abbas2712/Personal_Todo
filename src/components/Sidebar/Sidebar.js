import Form from '../DisplayTodos/Form';
import './Sidebar.css'
import { Link } from 'react-router-dom'

const TodoListSidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">My Todos</div>
            <ul className="nav-links">
                <li><Link to='/'>My Daily Todo</Link></li>
                <li><Link to='importanttodos'>Important</Link></li>
            </ul>
            <div className="userGenList">
                <ul className="nav-links">
                    <li>List 1</li>
                    <li>List 2</li>
                    <li>List 3</li>
                </ul>
                <div className='addListFrom'>
                    <input className='addListInput' placeholder='List Name'></input>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default TodoListSidebar;