import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Hero from './components/Hero/Hero.js'
import Main from './components/Main/Main.js'
import Our from './components/our_woks/Our.js'
import Steps from './components/Steps/Steps.js';
import Compoanians from './components/Compoanians/Compoanians.js'
import Team from './components/Team/Team.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
   <>
  <Navbar/>
  <Hero/>
  <Main/>
  <Our/>
  <Steps/>
  <Compoanians/>
  <Team/>
  <Footer/>
   </>
  );
}

export default App;
