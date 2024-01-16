import { useState } from "react";
import Form from "./Form";
import TodoList from "./Todolist";
import styles from '../../style.module.css'

const DisplayTodos = () => {
    const [todo, setTodo] = useState({name: "", status: false})
    const [todoList, setTodoList] = useState([])
    const [completedList, setCompletedList] = useState([])
    
    return (
        <div id={styles.displayContainer} className="DisplayContainer">
            <div className={styles.displayTodoList} >
            {/* Task to Complete */}
                <h2>My Daily Todo's</h2>
                <TodoList todoList={todoList} setTodoList={setTodoList} completedList={completedList} setCompletedList={setCompletedList} />
            {/* Completed Task */}
            {completedList === null ? null
            : <>
                <h2>Completed</h2> 
                <TodoList todoList={completedList} setTodoList={setTodoList} completedList={completedList} setCompletedList={setCompletedList}/>
                </>
            }
            </div>
           
            <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
            
        </div>
    );
}

export default DisplayTodos;