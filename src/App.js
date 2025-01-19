import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Hooks/ScroolToTop';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Maps from './Pages/Maps';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/where" element={<Maps />} />
      </Routes>
    </Router>
  )
}

export default App

