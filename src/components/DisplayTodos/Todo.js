import styles from '../../style.module.css'
import React from "react";

const Todo = ({ todo , todoList, setTodoList, completedList, setCompletedList}) => {

    const handleDeleteTodo=()=>{
        setTodoList(todoList.filter((item)=>{
            return item.id !== todo.id;
        }))
    }

    const compeltedTodo= (todoId)=>{
       const newArray =  todoList.map((todo)=> todo.id === todoId ? {...todo, status:!todo.status}: todo)
       setTodoList(newArray)

       const completedTask = newArray.filter((todoitem)=> todoitem.status)
       setCompletedList(completedTask)
       console.log(completedList)
    }

    const completed  = todo.status ? styles.completed : styles.notCompleted

    return (
        <>
            <div className={styles.todoitem} key={todo.id}>
                <span className={completed} onClick={()=>compeltedTodo(todo.id)}><h3 className={styles.todoname} >{todo.name}</h3></span>
                <button onClick={handleDeleteTodo} className={styles.deletebutton}>Done</button>
            </div>
        </>)
}

export default React.memo(Todo);