import styles from "../styles/style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList, placeHolderText }) => {
  const handleChange = (event) => {
    setTodo({title: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "") {
      alert("Please enter a valid task");
    } else {
      setTodoList([...todoList, { title: todo.title}]);
      setTodo({title: ""});
    }
  };

  return (
    <>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            value={todo.title}
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
