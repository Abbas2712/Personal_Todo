import urls from "../utilities/baseUrls.json"
import axios from 'axios'

const getSingleTodoItem = async (setTodo, id) => {

  await axios.get(`${urls.baseUrl}/${urls.paths.todoItem.getOneTodoItem}/${id}`)
  .then(res=>{
      res.data?setTodo(res.data):console.log("No data found")
  })
  .catch(err=> console.error(err))

}

const  getTodoItems = async (setTodoList) => {

  await axios.get(urls.baseUrl+"/"+urls.paths.todoItem.getTodoItems)
  .then(res=> {
    res.data?
    setTodoList(res.data,console.log(res.data)): console.log("check backend")})
  .catch((err)=>console.log(err))
 
}

export default {getSingleTodoItem, getTodoItems }