import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories'
import ItemListContainer from './container/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Categories />
      <ItemListContainer greeting = "e-commerce con React" />
    </div>
  );
}

export default App;
