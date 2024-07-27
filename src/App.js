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
import about_banner from './components/Assets/about_banner.gif'
import Contact from './components/Contact/Contact';
import About from './components/About/AboutUs'

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
          <Route path='/about' element={<About banner={about_banner} />} />
          <Route path='/product'>
            <Route index element={<Product />} />
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
