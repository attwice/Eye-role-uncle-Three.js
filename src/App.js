import { Fragment } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Nftsale from './components/Nftsale';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Mint from './components/Mint';

import './styles/navbar.css';
import "./styles/nftsale.css";
import "./styles/about.css";
import "./styles/roadmap.css";

function App() {
  return (
    <Fragment>      
      <Navbar/>    
      <Nftsale/> 
      <About/>   
      <Roadmap/>
      <Mint/>
      <Footer/>
    </Fragment>
  );
}

export default App;
