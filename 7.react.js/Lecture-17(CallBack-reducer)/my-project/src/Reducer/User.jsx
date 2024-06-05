import React from 'react'
import { useReducer, useState } from 'react';

const initialState = { name: 'srushti', age: 21 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
        case 'change_age': {
            return {
                name: state.name,
                age: action.nextage
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}


const User = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        });
    }

    function handleInputClick(e) {
        dispatch({
            type: 'change_age',
            nextage: e.target.value
        });
    }

    return (
        <div>
            <div className='flex justify-center'>
                <input value={state.name} onChange={handleInputChange} className='border-1 border-black btn' type='text' />
                <input value={state.age} onChange={handleInputClick} className='border-1 border-black btn'  type='number'/>
               
               
            </div>
            <p className='flex justify-center'>your name  {state.name}. and You are {state.age}</p>
        </div>
    )
}

export default User
