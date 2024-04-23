import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input className='p-3 m-3 w-48 border-2 border-red-300'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className='btn bg-red-800 p-3 m-3 w-24' onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}
