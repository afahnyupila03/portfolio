import { Fragment } from 'react';
import NavabarTab from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Serivces/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <NavabarTab />
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route exact={true} path='/about' element={ <About /> } />
        <Route exact={true} path='/services' element={ <Services /> } />
        <Route exact={true} path='/portfolio' element={ <Portfolio /> } />
        <Route exact={true} path='/contact' element={ <Contact /> } />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
