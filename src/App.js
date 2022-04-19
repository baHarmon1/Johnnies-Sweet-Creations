import './App.css';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
import AlternativeScreen from './screens/AlternativeScreen';
import CakeScreen from './screens/CakeScreen';
import ConfectionScreen from './screens/ConfectionScreen';
import CookieScreen from './screens/CookieScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen'

function App() {
  return (
    <Router className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>

            <Route path='/cakes' element={<CakeScreen/>}/>

            <Route path='/cookies' element={<CookieScreen/>}/>
            <Route path='/confections' element={<ConfectionScreen/>}/>
            <Route path='/alternatives' element={<AlternativeScreen/>}/>
            <Route path='/menu' element={<MenuScreen/>}/>
          </Routes>
        </Container>
      </main>
      <footer className='App-footer'>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;