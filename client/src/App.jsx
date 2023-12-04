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

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState();

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate(Path.Home);
    };

    return (
        <AuthContext.Provider value={{loginSubmitHandler}}>
        <>
            <Header />
            
            <main className="divider">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/recipes' element={<RecipeList />} />
                    <Route path='/recipes/add' element={<RecipeAdd />} />
                    <Route path='/recipes/:recipeId' element={<RecipeDetails />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </main>

            <Footer />
        </>
        </AuthContext.Provider>
    )
}

export default App
