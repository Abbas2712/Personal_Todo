import TodoListSidebar from "./components/Sidebar";
import TasksTodos from "./pages/TasksTodos";
import ImportantTodos from './pages/ImportantTodos';
import DailyTodos from "./pages/MyDailyTodos";
import styles from './styles/style.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomListPage from "./pages/CustomListPage";

function App() {
  return (
    <Router>
    <div id={styles.App} className="App">
      <TodoListSidebar/>
      <Routes>
        <Route path="/" element={<TasksTodos />}></Route>
        <Route path="/important" element={<ImportantTodos/>}></Route>
        <Route path="/dailytodo" element={<DailyTodos/>}></Route>
        <Route path="/userlist/:listname" element={<CustomListPage/>}></Route>
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
