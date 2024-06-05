import React from 'react'
import { useState } from 'react'
import TodoList from './Components/TodoList'
import Task from './Components/Task'
import Update_array from './Components/Update_array'

const App = () => {

  const [ListTodo, setListTodo] = useState([])
  const [edting , setediting] = useState(false)

  let addList = (inputText) => {
    if(inputText!=='')
    setListTodo([...ListTodo, inputText])
  }

  const  deleteListItem =(key)=>{
    let newListTodo = [...ListTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  
  const EditListItem =(index)=>{
   
  }


  return (
    <>
    {/* <Update_array/> */}
    <div>
        <Task addList={addList} />
        <h1 className='font-bold text-2xl py-3'> Todo </h1>
        <hr />
        {ListTodo.map((ListItem, i) => {
          return (
            <TodoList key={i} item={ListItem}  deleteItem={deleteListItem}/>
          )
        })}
        </div>
    </>
  )
}

export default App
