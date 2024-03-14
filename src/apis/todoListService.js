import axios from "axios"
import urls from '../utilities/baseUrls.json'

const addTodoList = async (data) => {
    await axios.post(`${urls.baseUrl}/${urls.paths.todoList.addTodoList}`, data, urls.Headers)
        .then(res => {
            return res.status
        })
        .catch(err => console.error(err))
}

const getAllTodoLists = async (setNewTodoList) => {

    await axios.get(`${urls.baseUrl}/${urls.paths.todoList.getAllTodoLists}`)
        .then(response => {
            setNewTodoList(response.data)
            console.log('Successfully retrieved all todo lists: ', response)

        })
        .catch((error) => console.error(`Failed to retrieve all todo lists: ${error}`));

}

const getSingleTodoList = async (setTodoList, id) => {
    await axios.get(`${urls.baseUrl}/${urls.paths.todoList.getOneTodoList}/${id}`)
        .then(response => {
            setTodoList(response.data)
            console.log('Success!', response.data);
        })
        .catch((error) => {
            console.error(error.message)
        });
}

export default { addTodoList, getAllTodoLists, getSingleTodoList }