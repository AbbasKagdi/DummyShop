import './App.css';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { About } from './components/about';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
