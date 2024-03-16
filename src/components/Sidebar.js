import { useState, useEffect, useMemo } from 'react';
import '../styles/Sidebar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import listApi from '../apis/todoListService'


const TodoListSidebar = () => {
    const [newListName, setNewList] = useState({listName: "", Items: []})
    const [newTodoList, setNewTodoList] = useState([])

    const navigate = useNavigate()

    const handleNewTodoLists=(e)=>{
       setNewList({listName: e.target.value})
    }

    const handleAddtoList= async (e)=>{
        e.preventDefault()
        if(newListName.listName.trim() === '')alert("Please enter a valid List Name")

        setNewTodoList([...newTodoList, {listName: newListName.listName}])
        var status = await listApi.addTodoList(newListName)

        if(!status === 201 )  alert('Error in adding the todo list')
        setNewList({listName: "",})
        await listApi.getAllTodoLists(setNewTodoList)
    }

    // checking the previous  state of lists to update the UI only when there is change in the data
    const dependentarray = useMemo( ()=>[newListName.Items], [newListName.Items]);
    useEffect(()=>{
        listApi.getAllTodoLists(setNewTodoList)
    },[dependentarray])

    return (
        <div className="sidebar">
            <div className="logo">My Todos</div>
            <ul className="nav-links">
                <li><Link to='dailytodo'>DailyTodos</Link></li>
                <li><Link to='important' >Important</Link></li>
                <li><Link to='/'>Task</Link></li>
            </ul>
            <div className="userGenList">
                <ul className="nav-links">
                    {newTodoList.length === 0 ? <div className='proxyListText'>No list yet? Add One!</div> :
                    newTodoList.map((newList)=>(
                        <div key={ newList.id}>
                        {
                            <li key={newList.id} onClick={()=>navigate(`/userlist/${newList.listName}`, {state:{'listId': newList.id}})} >
                                <NavLink to={`/userlist/${newList.listName}`}>{newList.listName}</NavLink>
                            </li>
                        }
                        </div>
                    )
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