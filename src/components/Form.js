import { useState } from "react";
import styles from "../styles/style.module.css";
import itemApi from "../apis/todoItemService";

const Form = ({ todo, setTodo, todoList, setTodoList, placeHolderText }) => {

  const [todoItem, setTodoItem] = useState({title: '', description: ''})
  const handleChange = (event) => {
    setTodoItem({title: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoItem.title.trim() === "") {
      alert("Please enter a valid task");
    } else {
      itemApi.addTodoItem(todoItem)
      setTodoItem({title: ""});
    }
  };

  return (
    <>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            value={todoItem.title}
            onChange={handleChange}
            className={styles.todoInput}
            placeholder={placeHolderText ? placeHolderText: "What's in your mind Today?"}></input>
          <button type="submit" className={styles.addTodoButton}>
            Add to List
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
