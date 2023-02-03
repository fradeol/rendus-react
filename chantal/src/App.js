// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuContexte from './contexte/MenuContexte';
import Contact from './pages/Contact';
import Drinks from './pages/Drinks';
import Home from './pages/Home';
import Menu from './pages/Menu';


function App() {
  return (
    <div>
      <Router>
        <MenuContexte>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/menus' element={<Menu/>}/>
            <Route exact path='/boissons' element={<Drinks/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
        </MenuContexte>
      </Router>
    </div> 
  );
}

export default App;
