import React from 'react'
import {baseUrl, paths} from "../../utilities/baseUrls.json"
import axios from 'axios'

export const getSingleTodoItem = (setTodo) => {

  axios.get(`${baseUrl}/${paths.todoItem.getOneTodoItem}/${id}`)
  .then(res=>{
      res.data?setTodo(res.data):console.log("No data found")
  })
  .catch(err=> console.error(err))

}

export const getTodoItems = () => {
  React.useEffect(() => {
    axios.get(_.baseUrl+"/"+_.paths.todoItem.getTodoItems)
    .then(res=> res.data)
  },[])
}

 