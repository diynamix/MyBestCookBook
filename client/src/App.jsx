import { Routes, Route } from 'react-router-dom'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/Home/Home"
import Login from './components/login/Login'
import RecipeAdd from './components/recipe-add/RecipeAdd'
import RecipeList from './components/recipe-list/RecipeList'
import Register from './components/register/Register'

function App() {

  return (
    <>
        <Header />
        
        <main className="divider">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipes' element={<RecipeList />} />
                <Route path='/recipes/add' element={<RecipeAdd />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </main>

        <Footer />
    </>
  )
}

export default App
