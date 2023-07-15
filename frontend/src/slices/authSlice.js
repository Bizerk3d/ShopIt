import { createSlice } from '@reduxjs/toolkit';

// check localstorage for state or set to null
const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

// create slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        }
    }
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;