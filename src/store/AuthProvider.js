import React, { useReducer } from "react";

import AuthContext from "./auth.contexet";

const defaultAuthState = {
    user: {},
    token: '',
    isLoggedIn: false,
}

const authReducer = (state, action) => {
    if (action.type === "LOGIN") {
        return {
            user: state.user,
            token: state.token,
            isLoggedIn: true
        };
    }

    if (action.type === "LOGOUT") {
        return {
            user: {},
            token: "",
            isLoggedIn: false
        };
    }

    return defaultAuthState;
}

const AuthProvider = (props) => {
    const [authState, dispatchAuthAction] = useReducer(authReducer, defaultAuthState);

    const loginHandler = (token, user) => {
        dispatchAuthAction({ type: "LOGIN", token: token, user: user });
    }

    const logoutHandler = () => {
        dispatchAuthAction({ type: "LOGOUT"});
    }

    const authContext = {
        isLoggedIn: authState.isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;