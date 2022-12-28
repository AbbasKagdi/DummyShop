import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from "./components/Home"
import Cart from "./components/Cart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/cart" element={ <Cart /> }/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
