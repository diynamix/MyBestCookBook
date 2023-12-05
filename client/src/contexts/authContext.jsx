import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import Path from '../paths';
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        
        navigate(Path.RecipeList);
    };
    
    const registerSubmitHandler = async (values) => {
        if (values.password !== values.confirmPassword) return;
        
        const result = await authService.register(values.email, values.password, values.username);
        
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        
        navigate(Path.RecipeList);
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
        // navigate(Path.Home);
    };
    
    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        isAuthenticated: !!auth.email,
        userId: auth['_id'],
        email: auth.email,
        username: auth.username || auth.email,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;