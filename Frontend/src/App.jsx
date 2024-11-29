import React from 'react'
import AddProductForm from './components/AddProductForm.jsx'
import { Routes, Route } from 'react-router-dom';
import ViewProduct from './components/ViewProduct.jsx';
import Navbar from './components/Navbar.jsx';
const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={<AddProductForm/>} />
      <Route path='/catalog' element={<ViewProduct/>} />
     </Routes>
    </div>
  )
}

export default App
