import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../redux/slices/todoSlice'

function Todos() {
    const toDos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()
    return (
        <div>
            <ul>
                {
                    toDos.map((todo) =>
                    (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default Todos