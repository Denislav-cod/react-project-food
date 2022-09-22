import React from "react";

const AuthContext = React.createContext({
    user: {},
    token: '',
    isLoggedIn: false,
    login: (user,token) => {},
    logout: () => {},
});

export default AuthContext;