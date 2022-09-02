import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
// import Nav from './components/Nav';
import Login from './components/login';
import Home from './components/Home';
import Logout from './components/logout'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
              {/* <Nav/> */}
              <Routes>
                <Route  exact path='/' element={<Login/>} />
                <Route path='/home' element={<Home/>} />                
                <Route path='/logout' element={<Logout/>} />                
              </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
