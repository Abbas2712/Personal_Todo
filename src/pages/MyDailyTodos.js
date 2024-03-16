import { useState, useEffect } from 'react'
import styles from '../styles/displaytodos.module.css'
import Form from '../components/Form'
import DisplayDate from '../components/DisplayDate'
import Todo from '../components/Todo'
import listItem from '../apis/todoItemService'


const DailyTodos = ()=>{
    const [todo, setTodo] = useState({id:0,title:'',Description:'',isCompleted: false,isImportant: false,isTodayTodo: false,isTasked: true, listId: 0})
    const [todoList, setTodoList] = useState([])
    const [completedList, setCompletedList] = useState([])

    const currentdate = DisplayDate()

    useEffect(()=>{
        listItem.getDailyTodoItems(setTodoList)
    },[])

    const compeltedTodo = (todoId) => {
        console.log("todolist", todoList)
        console.log("completedList", completedList)
        const toggletodo = todoList.find((todo) => todo.id === todoId)
        console.log(toggletodo)

        if (toggletodo) {
            const updatependinglist = todoList.filter((todo) => todo.id !== todoId)
            toggletodo.completed = true
            setCompletedList((prevList) => [...prevList, toggletodo])
            console.log(completedList)

            console.log(updatependinglist)
            setTodoList(updatependinglist)

        } else {
            const togglecompltedtodo = completedList.find((todo) => todo.id === todoId)
            console.log(togglecompltedtodo)

            if (togglecompltedtodo) {
                const updatetcompletedlist = completedList.filter((todo) => todo.id !== todoId)
                togglecompltedtodo.completed = false
                setTodoList((prevList) => [...prevList, togglecompltedtodo])

                setCompletedList(updatetcompletedlist)

            }
        }
    }

    // // 1. Get the current date and time using JavaScript's Date object:
    // let now = new Date();
    // // 2. Extract the day of the week (0-6) from
    // //   the "now" variable, which represents the current date and time.
    // let today = now.getDay();
    // // The "getDay()" method returns a number between 0 and 6,
    // // where 0 is Sunday and 6 is Saturday.
    // console.log("today's value:"+today);
    // if(today == 1){//Monday
    //     return 'You have classes today! Be on time!';
    //     }else if(today==0 || today==6){
    //         return 'It\'s the weekend! Relax and enjoy your free time!';
    //         } else {
    //             return 'Today is not Monday. Try again tomorrow.';
    //             }
                return(
                    <div id={styles.displayContainer} className="DisplayContainer">
            <div className={styles.displayTodoList} >
                {/* Task to Complete */}


                <h2 className={styles.titleName} >My Daily Todo's</h2>
                <p className={styles.currentDate}>{currentdate}</p>
                <div id={styles.todoList} className="todoList">
                    {todoList.length === 0 && completedList.length === 0 ? <h3 className={styles.subtitleName}>No tasks yet! Add one now.</h3> : todoList.map((todo) => (
                        <div key={todo.id}>
                            {
                                <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} onToggle={compeltedTodo} />
                            }
                        </div>
                    ))}
                </div>

                {/* Completed Task */}
                {completedList.length !== 0 && <>
                    <h2 className={styles.completedTitle}>Completed: &nbsp;&nbsp; {completedList.length}</h2>
                    {completedList.map((todo) => (
                        <div name="todoLists">
                            {
                                <Todo key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList} onToggle={compeltedTodo} />
                            }
                        </div>
                    ))}
                </>
                }
            </div>

            <Form flag="daily" todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />

        </div>
                )
}

export default DailyTodos;