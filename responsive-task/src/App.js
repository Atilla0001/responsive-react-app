import './App.css';
import './Ebay.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import Ebay from './Ebay.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={
            <Home />
          }
        />
        <Route path='/ebay'
          element={
            <Ebay />
          }
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
