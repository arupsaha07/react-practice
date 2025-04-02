Step by step guide for redux toolkit

1. import {configureStore} from '@reduxjs/toolkit';
2. export configure store - export const store = configureStore({})
3. create a folder called feature (login feature, product feature etc.)
4. create a folder inside feature called 'todo'
5. create a file inside todo called 'todoSlice'
6. import { createSlice, nanoid } from "@reduxjs/toolkit"; nanoId to use unique ids.
7. create an initial state in todoSlice
8. make a todoSlice and export. Keep objects inside the method
9. Inside todoSlice the objects will be name, initial state and reducers.
10. we can right Properties and functions inside reducers
11. inside the functions I always have access of 2 things called 'state' & 'action'
12. state will give the value of initialState
13. action will give the value of some upcoming values
14. Create 2 functions addTodo and removeTodo
15. Export individually all the functions i.e. export const {addTodo, removeTodo} = todoSlice.actions
16. import todoReducer from '../redux/slices/todoSlice' and export store in store page.
17. create 2 components.
18. 