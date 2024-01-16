import Todo from "./Todo";
const TodoList = ({ todoList, setTodoList, completedList, setCompletedList}) => {

    if (todoList?.length === 0) {
        return (<h3>No tasks yet! Add one now.</h3>)
    } else {
        return (
            todoList.map((todo) => (
                <div name="todoLists">
                    {
                        <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} completedList={completedList} setCompletedList={setCompletedList} />
                    }
                </div>
            ))
        )
    }
}

export default TodoList;