import {useEffect, useState} from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import Links from './components/Links';
import Footer from './components/Footer';
import Stars from './components/Stars';

function App() {

  const [loaded, setloaded] = useState(1)
  const [mounted, setmounted] = useState(true)
  const [mode, setmode] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setloaded(0)
      setmounted(false)
    }, 1400);
  }, [])

  const toggleMode=()=>{
    setmode(!mode)
  }

  return (
    <div className={`App ${mode ? 'dayMode' : 'darkMode'}`}>
      
      {
        mounted ? 
        <Loader isloaded={loaded}/>
        :
        <>
          <Stars/>
          <Links/>
          <Navigation toggleaction={toggleMode} currentmode={mode}/> 
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
          <footer>Crafted by John Carlo Devera</footer>
        </>
      }
    </div>
  );
}

export default App;
