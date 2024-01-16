import { useState } from "react";
import Form from "./Form";
import styles from '../../style.module.css'
import Todo from "./Todo";

const DisplayTodos = () => {
    const [todo, setTodo] = useState({name: "", completed: false})
    const [todoList, setTodoList] = useState([])
    const [completedList, setCompletedList] = useState([])
    

    const compeltedTodo = (todoId) => {
        console.log("todolist", todoList)
        console.log("completedList", completedList)
        const toggletodo = todoList.find((todo)=> todo.id ===todoId)
        console.log(toggletodo)

        if(toggletodo){
            const updatependinglist = todoList.filter((todo)=> todo.id !== todoId)
            toggletodo.completed = true
            setCompletedList((prevList)=>[...prevList,toggletodo])
            console.log(completedList)

            console.log(updatependinglist)
            setTodoList(updatependinglist)

        }else{
            const togglecompltedtodo = completedList.find((todo)=> todo.id ===todoId)
            console.log(togglecompltedtodo)

            if(togglecompltedtodo){
                const updatetcompletedlist = completedList.filter((todo)=> todo.id !== todoId)
                togglecompltedtodo.completed = false
                setTodoList((prevList)=> [...prevList, togglecompltedtodo])
                
                setCompletedList(updatetcompletedlist)
    
            }
        }
    }

    return (
        <div id={styles.displayContainer} className="DisplayContainer">
            <div className={styles.displayTodoList} >
            {/* Task to Complete */}


                <h2>My Daily Todo's</h2>
                {todoList.length === 0 ? <h3>No tasks yet! Add one now.</h3> : todoList.map((todo) => (
                <div name="todoLists">
                    {
                        <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} onToggle={compeltedTodo} />
                    }
                </div>
                ))}


            {/* Completed Task */}
            {completedList.length === 0 ? null
            : <>
                <h2>Completed</h2> 
                {completedList.map((todo) => (
                <div name="todoLists">
                    {
                        <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} onToggle={compeltedTodo}/>
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