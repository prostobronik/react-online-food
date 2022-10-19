import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import NotFound from './Pages/NotFound'
import Category from './Pages/Category'
import Recepie from './Pages/Recepi'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contact />}></Route>
            <Route path="/category/:name" element={<Category />}></Route>
            <Route path="/meal/:id" element={<Recepie />}></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
