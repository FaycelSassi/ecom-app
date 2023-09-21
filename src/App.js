import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';
//add Routes to site
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Navbar} from "./Components/navbar";
import { Account } from './Pages/Account/Account';
import { Cart } from './Pages/Cart/Cart';
import { Home } from './Pages/Home/Home';
import { Footer } from "./Components/footer";

function App() {
  return (
    <div className="App">
      {/* adddin routes */}
      <Router>
        
        {/* present in every route */}
        <Navbar/>
        <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Account" element={<Account/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
