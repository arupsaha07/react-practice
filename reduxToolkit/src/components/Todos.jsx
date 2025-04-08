import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodoAction } from '../redux/slices/todoSlice'

function Todos() {
    const toDos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    const [editTodo, setEditTodo] = useState(null);

    const handleClick = (todo) => {
        setEditTodo(todo);
    }

    const handleChange = (e) => {
        setEditTodo({ ...editTodo, text: e.target.value });
    };


    const handleSave = () => {
        dispatch(editTodoAction(editTodo)); // ✅ dispatch the action with updated todo
        setEditTodo(null); // ✅ reset after saving
    };

    return (
        <div className='mt-6'>
            <ul className='space-y-3'>
                {
                    toDos.map((todo) =>
                    (
                        <li key={todo.id} className='mb-4 flex items-center justify-between p-3 text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors'>
                            {
                                editTodo?.id === todo.id ? (
                                    <>
                                        <input type="text" value={editTodo.text} onChange={handleChange} />
                                        <button onClick={handleSave}>Save</button>
                                        <button onClick={() => setEditTodo(null)}>cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <span>{todo.text}</span>
                                        <button onClick={() => handleClick((todo))} className='text-green-500 border border-green-100 hover:text-green-700 px-3 py-2 cursor-pointer rounded hover:bg-green-100 transition-colors'>edit</button>
                                            <button onClick={() => dispatch(removeTodo(todo.id))} className='text-red-500 border border-red-100 hover:text-red-700 px-3 py-2 cursor-pointer rounded hover:bg-red-100 transition-colors'>
                                                delete
                                            </button>
                                            
                                    </>
                                )
                            }
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default Todos