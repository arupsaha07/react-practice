import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentTheme: 'light',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.currentTheme === 'light') {
                state.currentTheme = 'dark';
            } else {
                state.currentTheme = 'light';
            }

        },
        setTheme: (state, action) => {
            state.currentTheme = action.payload;
        },
    }

})

// Action creators are generated for each case reducer function
export const { toggleTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer;