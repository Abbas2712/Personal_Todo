import styles from '../style.module.css';
import Form from '../components/Form';

const ImportantTodos= () =>{
    const [todo, setTodo] = useState({ name: "", completed: false })
    const [todoList, setTodoList] = useState([])
    const [completedList, setCompletedList] = useState([])
    
    return(
        <div id={styles.displayContainer} className="DisplayContainer">
            <h2>Important Todos</h2>

            <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
        </div>
    )
}

export default ImportantTodos;