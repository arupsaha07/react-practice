import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

function AddTodos() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form onSubmit={addTodoHandler}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='px-4 py-2 rounded-lg border-2 border-gray-300
             bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500' />
            <button type='submit' className="px-6 py-2 ms-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-medium shadow-sm">Add Todo</button>
        </form>
    )
}

export default AddTodos