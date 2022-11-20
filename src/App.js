// import logo from './Logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Network from './components/Network';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Features/>
      <Pricing/>
      <Network />
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
