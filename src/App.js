import './App.css';
import Div1 from './Component/Div1';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
// import { Aos } from 'aos';
function App() {
  useEffect(() => {
    // Update the document title using the browser API
    Aos.init();
  });
  return (
    <div >
      <Navbar/>
      <Div1/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
