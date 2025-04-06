import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store/themeSlice';

function ThemeToggle() {

    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.theme.currentTheme)

    const changeTheme = () => {
        dispatch(toggleTheme())
    }


    return (
        <button onClick={changeTheme} className={`px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200`}>
            {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
    )
}

export default ThemeToggle