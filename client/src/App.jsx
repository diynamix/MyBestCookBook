import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
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
import RecipeEdit from './components/recipe-edit/RecipeEdit';
import RecipeMy from './components/recipe-my/RecipeMy';
import RecipeByUser from './components/recipe-by-user/RecipeByUser';

function App() {
    return (
        <AuthProvider>
        <>
            <Header />
            
            <main className="divider">
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.RecipeList} element={<RecipeList />} />
                    <Route path={Path.RecipeAdd} element={<RecipeAdd />} />
                    <Route path={Path.RecipeDetails} element={<RecipeDetails />} />
                    <Route path={Path.RecipeEdit} element={<RecipeEdit />} />
                    <Route path={Path.RecipeListMy} element={<RecipeMy />} />
                    <Route path={Path.RecipeListByUser} element={<RecipeByUser />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </main>

            <Footer />
        </>
        </AuthProvider>
    )
}

export default App
