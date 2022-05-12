import { GitHub,Gitlab,Linkedin, Globe } from 'react-feather';
const Links =()=>{
    return(
      <div className="liner animated fadeInUp" style={{animationDelay: '1s'}}>
        <div className="liner-links">
          <a href="https://github.com/jcdevz-dev" target="_blank" rel="noopener noreferrer" title="github.com">
            <GitHub className="link-1" color="#787c88" size={26}/>
          </a>
          <a href="https://www.linkedin.com/in/john-carlo-devera-5240761b6/" target="_blank" rel="noopener noreferrer" title="linkedin.com">
            <Linkedin className="link-2" color="#787c88" size={26}/>
          </a>
          <a href="https://www.onlinejobs.ph/jobseekers/info/1429893" target="_blank" rel="noopener noreferrer" title="onlinejobs.ph">
            <Globe className="link-3" color="#787c88" size={26}/>
          </a>
          <a href="https://gitlab.com/jcdevz-dev" target="_blank" rel="noopener noreferrer" title="gitlab.com">
            <Gitlab className="link-1" color="#787c88" size={26}/>
          </a>
        </div>
      </div>
    )
}

export default Links