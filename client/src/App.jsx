import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Login from './components/login/Login';
import RecipeAdd from './components/recipe-add/RecipeAdd';
import RecipeDetails from './components/recipe-details/RecipeDetails';
import RecipeList from './components/recipe-list/RecipeList';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        
        navigate(Path.Home);
    };
    
    const registerSubmitHandler = async (values) => {
        if (values.password !== values.confirmPassword) return;
        
        const result = await authService.register(values.email, values.password, values.username);
        
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        
        navigate(Path.Home);
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
        <>
            <Header />
            
            <main className="divider">
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.RecipeList} element={<RecipeList />} />
                    <Route path={Path.RecipeAdd} element={<RecipeAdd />} />
                    <Route path={Path.RecipeDetails} element={<RecipeDetails />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </main>

            <Footer />
        </>
        </AuthContext.Provider>
    )
}

export default App
