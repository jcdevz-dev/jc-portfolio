import { GitHub,Linkedin, Globe } from 'react-feather';
const Contact =()=>{
    return(
        <div id="contact-me" className="hero animated fadeInLeft" style={{animationDelay: '.4s'}}>
            <p className="sub" style={{color: 'var(--orange)'}}>Contact me here</p>
            <div className="wrap">
            <div className="col" style={{paddingRight: 50}}>
                    <a href="https://www.linkedin.com/in/john-carlo-devera-5240761b6/" target="_blank" rel="noopener noreferrer" title="linkedin.com">
                        <Linkedin className="link-2" color="#787c88" size={126}/>
                    </a>
                    <div className="card-title">Linkedin</div>
                </div>
                <div className="col">
                    <a href="https://www.onlinejobs.ph/jobseekers/info/1429893" target="_blank" rel="noopener noreferrer" title="onlinejobs.ph">
                        <Globe className="link-3" color="#787c88" size={126}/>
                    </a>
                    <div className="card-title">OnlineJobs</div>
                </div>
            </div>
        </div>
    )
}

export default Contact