import TodoListSidebar from "./components/Sidebar";
import DisplayTodos from "./pages/DisplayTodos";
import ImportantTodos from './pages/ImportantTodos';
import styles from './style.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div id={styles.App} className="App">
      <TodoListSidebar/>
      <Routes>
        <Route path="/" element={<DisplayTodos />}></Route>
        <Route path="/important" element={<ImportantTodos/>}></Route>
      </Routes>
      {/* <DisplayTodos /> */}
      {/* <Header/> */}


      {/* <TodoList todoList={todoList} setTodoList={setTodoList}/> */}
      {/* <Form todo={todo} setTodo ={setTodo} todoList={todoList} setTodoList={setTodoList}/> */}
    </div>
    </Router>
  );
}

export default App;
