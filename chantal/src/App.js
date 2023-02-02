// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Contact from './pages/Contact';
import Drinks from './pages/Drinks';
// import Presentation from './components/Presentation';
// import Slider from './components/Slider';
import Home from './pages/Home';
import Menu from './pages/Menu';
// import Home from './pages/Home';
// import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/menus' element={<Menu/>}/>
          <Route exact path='/boissons' element={<Drinks/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
