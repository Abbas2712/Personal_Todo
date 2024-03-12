import { useState, useEffect } from "react";
import Form from "../components/Form";
import styles from '../styles/displaytodos.module.css'
import Todo from "../components/Todo";
import DisplayDate from '../components/DisplayDate'

const DisplayTodos = () => {
    const [todo, setTodo] = useState({ name: "", completed: false })
    const [todoList, setTodoList] = useState([])
    const [completedList, setCompletedList] = useState([])
    const currentdate = DisplayDate()


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

    useEffect(()=>{
        
    },[todoList])


    return (
        <div id={styles.displayContainer} className="DisplayContainer">
            <div className={styles.displayTodoList} >
                {/* Task to Complete */}


                <h2 className={styles.titleName} >My Daily Todo's</h2>
                <p className={styles.currentDate}>{currentdate}</p>
                <div id={styles.todoList} className="todoList">
                    {todoList.length === 0 && completedList.length === 0 ? <h3 className={styles.subtitleName}>No tasks yet! Add one now.</h3> : todoList.map((todo) => (
                        <>
                            {
                                <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} onToggle={compeltedTodo} />
                            }
                        </>
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
            </div>

            <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />

        </div>
    );
}

export default DisplayTodos;