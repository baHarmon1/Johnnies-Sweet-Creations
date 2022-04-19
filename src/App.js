import './App.css';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

import CakeBabyScreen from './screens/CakeBabyScreen';
import CakeBirthdayScreen from './screens/CakeBirthdayScreen';
import CakeSpecialScreen from './screens/CakeSpecialScreen';
import CakeWeddingScreen from './screens/CakeWeddingScreen';

import AlternativeScreen from './screens/AlternativeScreen';
import ConfectionScreen from './screens/ConfectionScreen';
import CookieScreen from './screens/CookieScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen'

function App() {
  return (
    <Router className="App">
      <header className="App-header">
          <Header/>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>

            <Route path='/cakes-wedding' element={<CakeWeddingScreen/>}/>
            <Route path='/cakes-baby' element={<CakeBabyScreen/>}/>
            <Route path='/cakes-birthday' element={<CakeBirthdayScreen/>}/>
            <Route path='/cakes-special' element={<CakeSpecialScreen/>}/>

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