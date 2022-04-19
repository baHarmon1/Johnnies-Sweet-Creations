import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <main>
        <HomeScreen/>
      </main>
      <footer className='App-footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;