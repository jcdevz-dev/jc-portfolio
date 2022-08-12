import { Folder, GitHub, ExternalLink } from 'react-feather';
const Projects =()=>{

    const projectData = [
        {
            title: 'WorshipHIM',
            desc: 'This Android app is a chord and lyrics application focusing on worship songs. Main feature is the chord diagram, transpose and line up creation and other more features.',
            tools: 'react-native java android',
            github: 'https://github.com/jcdevz-dev/WorshipHim',
            link: 'https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US',
        },
        {
            title: 'Landing App WorshipHIM',
            desc: 'Landing page of your No.1 Praise and Worship, Chords and Lyrics App, designed to help ease everyone in their worship to God.',
            tools: 'react javascript html css',
            github: 'https://github.com/jcdevz-dev/landing.worshiphim',
            link: 'https://worshiphim.vercel.app/',
        },
    ]
    return(
        <div id="my-projects" className="hero animated fadeInLeft" style={{animationDelay: '.4s'}}>
            <p className="sub">Featured Projects</p>
            <div className="wrap">
                {
                    projectData.map((i,q)=>(
                        <div className="card" key={q}>
                            <div className="card-header">
                                <Folder color="var(--secondary)" size={32} strokeWidth={1}/>
                                <div className="card-links">
                                    <a href={i.github} target="_blank" rel="noopener noreferrer">
                                        <GitHub className="link-1" color="var(--sublime)" size={18} strokeWidth={1.5}/>
                                    </a>
                                    <a href={i.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="link-3" color="var(--sublime)" size={18} strokeWidth={1.5}/>
                                    </a>
                                </div>
                            </div>
                            <div className="card-title">{i.title}</div>
                            <div className="card-body">{i.desc}</div>
                            <div className="card-footer">{i.tools}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects