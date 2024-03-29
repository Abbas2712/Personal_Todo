import urls from "../utilities/baseUrls.json"
import axios from 'axios'

// Get Items
const getSingleTodoItem = async (setTodo, id) => {

  await axios.get(`${urls.baseUrl}/${urls.paths.todoItem.getOneTodoItem}/${id}`)
  .then(res=>{
      res.data?setTodo(res.data):console.log("No data found")
  })
  .catch(err=> console.error(err))

}

const getTodoItems = async (setTodoList) => {

  await axios.get(urls.baseUrl+"/"+urls.paths.todoItem.getTodoItems)
  .then(res=> {
    res.data?
    setTodoList(res.data,console.log(res.data)): console.log("check backend")})
  .catch((err)=>console.log(err))
 
}

const getDailyTodoItems = async (setTodoList)=> {
  await axios.get(`${urls.baseUrl}/${urls.paths.todoItem.dailyTodoItems}`)
  .then(res=>{
    res.data?
    setTodoList(res.data, console.log(res.data)) : console.log("check backend")
  })
  .catch(err=>  console.log(err.response.status,err.response.data))
}

const getImportantTodoItems = async (setTodoList)=> {
  await axios.get(`${urls.baseUrl}/${urls.paths.todoItem.importantTodoItems}`)
  .then(res=>{
    res.data?
    setTodoList(res.data, console.log(res.data)) : console.log("check backend")
  })
  .catch(err=>  console.log(err.response.status,err.response.data))
}

// Add Items
const addTodoItem = async (todoItem)=>{
  await axios.post(urls.baseUrl+"/"+urls.paths.todoItem.addTodoItem,todoItem,urls.Headers)
  .then(()=>console.log('Added Todo Item'))
  .catch((err)=>console.log(err))
}

export default {getSingleTodoItem, getTodoItems, addTodoItem, getImportantTodoItems, getDailyTodoItems }