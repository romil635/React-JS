import React from 'react'

const TodoList = (props) => {
  return (
    <div className='my-1'>
    <li className='flex justify-between '>
      {props.item}
      <div className='my-2'>
      <span className='bg-green-500 rounded-xl text-white p-2 px-3 me-2'onClick={e =>{
        props.edititem(props.item)
      }}>Edit</span>
      <span className='bg-red-500 rounded-xl text-white p-2 px-3 ' onClick={e => {
        props.deleteItem(props.index)
      }}>Delete</span>
      </div>
    </li>
  </div>

  )
}

export default TodoList
