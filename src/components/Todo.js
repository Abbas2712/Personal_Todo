import styles from '../../style.module.css'
import React from "react";

const Todo = ({ todo, todoList, setTodoList, onToggle }) => {

    const handleDeleteTodo = () => {
        setTodoList(todoList.filter((item) => {
            return item.id !== todo.id;
        }))
    }
    const completed = todo.completed ? styles.completed : styles.notCompleted

    return (
        <>
            <div className={styles.todoitem} key={todo.id}>
                <span className={completed} onClick={()=> onToggle(todo.id)}><h3 className={styles.todoname} >{todo.name}</h3></span>
                <button onClick={handleDeleteTodo} className={styles.deletebutton}>Done</button>
            </div>
        </>)
}

export default React.memo(Todo);