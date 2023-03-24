import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">        
      <NavBar/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
