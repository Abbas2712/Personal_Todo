import React, { useEffect, useState } from 'react'
import styles from '../styles/displaytodos.module.css'
import { useLocation } from 'react-router-dom'
import Todo from '../components/Todo'
import Form from '../components/Form'
import listApis from '../apis/todoListService'


const CustomListPage = () => {
  //fetching data from useNavigator hook
  const location = useLocation()
  const {state} = location

  console.log(state.listId)

  const [todo, setTodo] = useState({ id: 0, title: '', description: '', isCompleted: false, isImportant: false, isTodayTodo: false, isTasked: true })
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(true);
  const [completedList, setCompletedList] = useState([])

  const compeltedTodo = (todoId) => {
    console.log("todolist", todoList)
    console.log("completedList", completedList)
    const toggletodo = todoList.find((todo) => todo.id === todoId)
    console.log(toggletodo)

    if (toggletodo) {
        const updatependinglist = todoList.filter((todo) => todo.id !== todoId)
        toggletodo.completed = true
        setCompletedList((prevList) => [...prevList, toggletodo])
        console.log(completedList)

        console.log(updatependinglist)
        setTodoList(updatependinglist)

    } else {
        const togglecompltedtodo = completedList.find((todo) => todo.id === todoId)
        console.log(togglecompltedtodo)

        if (togglecompltedtodo) {
            const updatetcompletedlist = completedList.filter((todo) => todo.id !== todoId)
            togglecompltedtodo.completed = false
            setTodoList((prevList) => [...prevList, togglecompltedtodo])

            setCompletedList(updatetcompletedlist)

        }
    }
}
  
  useEffect(() => {
    const getdata  = async () => {
      await listApis.getSingleTodoList(setTodoList, state.listId)
      setLoading(false)// Data fetching is complete
    }
    getdata()
  }, [state.listId])
  
  console.log(todoList)
  const todoitems = todoList.items
  
  return (
    <div id={styles.displayContainer} className="DisplayContainer">
            <div className={styles.displayTodoList} >
                {/* Task to Complete */}
                <h2 className={styles.titleName} >{todoList.listName? todoList.listName : "<List Name>"}</h2>
                {/* Conditional Rendering */}
                {loading? <h2 className={styles.subtitleName}>Loading....</h2>:
                  <>
                 <div id={styles.todoList} className="todoList">
                    {todoitems.length === 0 ? (<h3 className={styles.subtitleName}>No tasks yet! Add one now.</h3>) : 
                    todoitems.map((todo) => (
                        <div key={todo.id}>
                            {
                                <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} onToggle={compeltedTodo} />
                            }
                        </div>
                    ))}
                </div> 

                {/* Completed Task */}
                {completedList.length !== 0 && <>
                    <h2 className={styles.completedTitle}>Completed: &nbsp;&nbsp; {completedList.length}</h2>
                    {completedList.map((todo) => (
                        <div name="todoLists">
                            {
                                <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} onToggle={compeltedTodo} />
                            }
                        </div>
                    ))}
                </>
                }
                  </>
                }

                
            </div>

            <Form flag={state.listId} todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} placeHolderText="Add Your Task!" />

        </div>
  )
}

export default CustomListPage