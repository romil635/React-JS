  import React from 'react'
  import { useState } from 'react'
  
  const Task = (props) => {

    const [inputText, setinputText] = useState('')
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText)
            setinputText("")
        }
    }

    return (
        <div>
        <div className="input-continer">
            <input type="text" name="" id="" className='border-2 border-black border-solid rounded-xl p-2 me-2' value={inputText} placeholder='Enter todo list...' onKeyDown={handleEnterPress}
                onChange={e => {
                    setinputText(e.target.value)
                }}
            />
            <button className=' bg-blue-500 rounded-xl text-white p-2 px-5' onClick={() => {
                props.addList(inputText)
                setinputText("")
            }}>Add</button>

        </div>
    </div>

    )
  }
  
  export default Task
  