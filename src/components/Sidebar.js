import { useState } from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { nanoid } from "nanoid";


const TodoListSidebar = () => {
    const [newListName, setNewList] = useState({listName: "",})
    const [newTodoList, setNewTodoList] = useState([])

    const handleNewTodoLists=(e)=>{
       setNewList({listName: e.target.value})
    }

    const handleAddtoList=(e)=>{
        e.preventDefault()
        setNewTodoList([...newTodoList, {id:nanoid(), listName: newListName.listName}])
        setNewList({listName: "",})
    }
    return (
        <div className="sidebar">
            <div className="logo">My Todos</div>
            <ul className="nav-links">
                <li><Link to='/'>My Daily Todo</Link></li>
                <li><Link to='important' >Important</Link></li>
                <li><Link to='tasks'>Tasks</Link></li>
            </ul>
            <div className="userGenList">
                <ul className="nav-links">
                    {newTodoList.length === 0? <div className='proxyListText'>No list yet? Add One!</div> :
                    newTodoList.map((newList)=>
                        <li key={newList.id} >{newList.listName}</li>
                    )}
                </ul>
                <div className='addListFrom'>
                    <form onSubmit={handleAddtoList} className='newListForm' >
                        <input value={newListName.listName} onChange={handleNewTodoLists} className='addListInput' placeholder='List Name'></input>
                    </form>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default TodoListSidebar;