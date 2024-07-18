import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategories from './pages/ShopCategories';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import performance_banner from './components/Assets/performance_banner.jpg'
import oem_banner from './components/Assets/oem_banner.gif'
import specials_banner from './components/Assets/specials_banner.jpg'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/performance' element={<ShopCategories banner={performance_banner} category='performance' />} />
          <Route path='/oem' element={<ShopCategories banner={oem_banner} category='oem' />} />
          <Route path='/specials' element={<ShopCategories banner={specials_banner} category='specials' />} />
          <Route path='/product'>
            <Route index element={<Product />} />
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
