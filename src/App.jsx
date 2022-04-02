import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories'
import ItemListContainer from './container/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Categories />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/*" element={<Navigate to='/' />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
