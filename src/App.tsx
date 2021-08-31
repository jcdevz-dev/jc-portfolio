import React from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import { GitHub,Linkedin, Globe } from 'react-feather';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <div className="liner">
        <div className="liner-links">
          <a href="https://github.com/jcdevz-dev" target="_blank" rel="noopener noreferrer" title="github.com">
            <GitHub color="#787c88" size={26}/>
          </a>
          <a href="https://www.linkedin.com/in/john-carlo-devera-5240761b6/" target="_blank" rel="noopener noreferrer" title="linkedin.com">
            <Linkedin color="#787c88" size={26}/>
          </a>
          <a href="https://www.onlinejobs.ph/jobseekers/info/1429893" target="_blank" rel="noopener noreferrer" title="onlinejobs.ph">
            <Globe color="#787c88" size={26}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
