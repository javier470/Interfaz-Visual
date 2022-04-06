//importaciones

import './App.css';
import NavBar from './components/navBar';
import Welcome from './components/signUp';
import Products from './components/products';
import Footer from './components/footer';

//aplicación
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Welcome />
      </div>
      <div className='info'>
        <Products />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
