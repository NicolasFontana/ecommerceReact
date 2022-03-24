import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories'
import ItemListContainer from './container/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Categories />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting = "e-commerce con React" />}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer greeting = "e-commerce con React" />}/>
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
