import React from "react"
import axios from "axios"
import { baseUrl, paths} from '../utilities/baseUrls.json'

export function addTodoList(data) {
    axios.post(`${baseUrl}/${paths.todoList.addTodoList}`,data,Headers)
    .then(res=> {
      return res
    })
    .catch(err=> console.error(err))
}

export const getAllTodoLists = (setTodoList) => {
React.useEffect(() => {
    const getLists = () =>{
        axios.get(`${baseUrl}/${paths.todoList.getAllTodoLists}`)
        .then(response => {
            setTodoList(response.data)
            console.log('Successfully retrieved all todo lists: ', response)
        
        })
        .catch((error) => console.error(`Failed to retrieve all todo lists: ${error}`));
    }

    getLists()
} , []) 
}

export const getSingleTodoList = (id) => {
    axios.get(`${baseUrl}/${paths.todoList.getOneTodoList}/${id}`)
    .then(response => {
        setTodoList(response.data)
        console.log('Success!', response.data);
    })
    .catch((error) => {
        console.error(error.message)
    });
}