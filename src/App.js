import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Shop } from './pages/Shop';
import { Shopcategory } from './pages/Shopcategory';
import { Loginsignup } from './pages/Loginsignup';
import { Product } from './pages/product';
import { Cart } from './pages/Cart';
import Fooder from './components/Fooder/Fooder';
import men_banner from './components/Asset/banner_mens.png';
import women_banner from './components/Asset/banner_women.png';
import kids_banner from './components/Asset/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid" />} />


          {/* Product Page (Dynamic Route) */}
          <Route path="/product/:productId" element={<Product />} />

          {/* Cart & Login */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
        </Routes>
        <Fooder />
      </BrowserRouter>
    </div>
  );
}

export default App;
