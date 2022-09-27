import { createSlice } from "@reduxjs/toolkit";

const defaultAuthState = {
    token: '',
    isLoggedIn: false,
    isAdmin: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: defaultAuthState,
    reducers: {
        loginAction(state, action) {
            const user = action.payload;
            state.token = user.token;
            state.isLoggedIn = true;
            if(user.isAdmin === true){
                state.isAdmin = true;
            }
        },
        logoutAction(state, action) {
            state.token = " ";
            state.isLoggedIn = false;
            state.isAdmin = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;