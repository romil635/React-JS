import { useState } from 'react';

export  function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button className='bg-indigo-300 ml-8 w-14 mt-6' onClick={() => setIsEditing(false)}>
        Sign Up
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className='bg-indigo-400 ml-8 w-14 mt-6' onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button className='bg-indigo-200 ml-8 w-14 mt-6' onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}
export default TaskList;