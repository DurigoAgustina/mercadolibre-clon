import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/layout/Header/Header'
import HomePage from '../pages/HomePage/HomePage'
import SingleProduct from '../pages/SingleProduct/SingleProduct'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/producto/guitarra-electrica' element={<SingleProduct />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter