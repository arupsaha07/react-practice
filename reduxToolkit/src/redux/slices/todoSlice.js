import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: nanoid(), text: action.payload })
        },
        removeTodo: (state, action) => {
            console.log(action.payload)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodoAction: (state, action) => {
            const { id, text } = action.payload
            const todoToEdit = state.todos.find((todo) => todo.id === id);
            todoToEdit.text = text;
        }
    }
})

export const { addTodo, removeTodo, editTodoAction } = todoSlice.actions

export default todoSlice.reducer