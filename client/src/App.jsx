import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/Home/Home"

function App() {

  return (
    <>
        <Header />
        
        <main className="divider">
            <Home />
        </main>

        <Footer />
    </>
  )
}

export default App
