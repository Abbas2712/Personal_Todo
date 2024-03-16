import styles from "../styles/style.module.css";
import itemApi from "../apis/todoItemService";
import { useState } from "react";

const Form = ({ flag, todoList, setTodoList, placeHolderText }) => {

  const [todo, setTodo] = useState(()=>({id:0,title:'',Description:'',isCompleted: false,isImportant: false,isTodayTodo: false,isTasked: true, listId: 0}))

  const handleChange =  (event) => {
    setTodo({title: event.target.value, Description: ""});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (todo.title.trim() === "")alert("Please enter a valid task");

    if(typeof flag === 'string'){
          switch(flag){
            case 'daily':
              todo.isTodayTodo = true
              break;
            case 'important':
              todo.isImportant = true;
              break
            default:
              break
          }
        }else{
          todo.listId = flag
        }

    setTodo(todo);
    await itemApi.addTodoItem(todo)
    setTodoList(list=>({
      ...list,
      items: [...list.items, todo]
    }));
    setTodo({title: ""});
    
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
