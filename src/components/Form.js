import styles from "../../style.module.css";
import { nanoid } from "nanoid";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleChange = (event) => {
    setTodo({name: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.name.trim() === "") {
      alert("Please enter a valid task");
    } else {
      setTodoList([...todoList, { id: nanoid(), name: todo.name, completed: false}]);
      setTodo({name: "", completed: false});
    }
  };

  return (
    <>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            value={todo.name}
            onChange={handleChange}
            className={styles.todoInput}
            placeholder="What's in your mind Today?"></input>
          <button type="submit" className={styles.addTodoButton}>
            Add to List
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
