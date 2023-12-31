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
import AuthGuard from './components/guards/AuthGuard';
import RecipeFavourite from './components/recipe-favourite/RecipeFavourite';
import ErrorPage from './components/error-page/ErrorPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            
            <AuthProvider>

                <>
                    <Header />
                    
                    <main className="divider">
                        <Routes>
                            <Route path={Path.Home} element={<Home />} />
                            <Route path={Path.RecipeList} element={<RecipeList />} />
                            <Route path={Path.RecipeDetails} element={<RecipeDetails />} />
                            <Route path={Path.RecipeListByUser} element={<RecipeByUser />} />
                            <Route path={Path.Login} element={<Login />} />
                            <Route path={Path.Register} element={<Register />} />
                            <Route path={Path.ErrorPage} element={<ErrorPage />} />

                            <Route element={<AuthGuard />}>
                                <Route path={Path.RecipeAdd} element={<RecipeAdd />} />
                                <Route path={Path.RecipeEdit} element={<RecipeEdit />} />
                                <Route path={Path.RecipeListMy} element={<RecipeMy />} />
                                <Route path={Path.RecipeListFavourite} element={<RecipeFavourite />} />
                                <Route path={Path.Logout} element={<Logout />} />
                            </Route>
                        </Routes>
                    </main>

                    <Footer />
                </>

            </AuthProvider>

        </ErrorBoundary>
    )
}

export default App
