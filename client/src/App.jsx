import { Routes, Route } from 'react-router-dom'

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/Home/Home"
import RecipeList from './components/recipe-list/RecipeList'

function App() {

  return (
    <>
        <Header />
        
        <main className="divider">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipes' element={<RecipeList />} />
            </Routes>
        </main>

        <Footer />
    </>
  )
}

export default App
