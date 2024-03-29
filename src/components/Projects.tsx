import { useState, useEffect } from 'react';
import { Folder, GitHub, ExternalLink } from 'react-feather';
const Projects =()=>{

    const projectData = [
        {
            title: 'Elancerz',
            desc: 'Find your perfect partner here! Choose global talent based on type of skill set, experience level and location. \n\n Worked as a senior developer for this web app. Created dynamic reusable components and integrated calendly, messaging and project management features!',
            tools: '#react #firebase #laravel #javascript #html #css #styled-components',
            github: '',
            link: 'https://elancerz.com/',
        },
        {
            title: 'Agency Iron CRM',
            desc: 'CRM for Rocky Mountain West Insurance LLC. \n\n Worked as a senior developer for this web app. Created dynamic reusable components!',
            tools: '#react #mongodb #postgres #javascript #python #mui #html #css',
            github: '',
            link: 'https://agency-iron-crm.herokuapp.com/',
        },
        {
            title: 'WorshipHIM',
            desc: 'This Android app is a chord and lyrics application focusing on worship songs. Main feature is the chord diagram, transpose and line up creation and other more features.',
            tools: '#react-native #java #android',
            github: '',
            link: 'https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US',
        },
        {
            title: 'Landing App WorshipHIM',
            desc: 'Landing page of your No.1 Praise and Worship, Chords and Lyrics App, designed to help ease everyone in their worship to God.',
            tools: '#react #javascript #html #css',
            github: 'https://github.com/jcdevz-dev/landing.worshiphim',
            link: 'https://worshiphim.vercel.app/',
        },
        {
            title: 'Admin Web App WorshipHIM',
            desc: 'Admin Web App for managing artists, songs, hymns - classics for the WorshipHIM app',
            tools: '#react #firebase #javascript #html #css',
            github: 'https://github.com/jcdevz-dev/worshipHIM-Firebase-Web',
            link: 'https://worship-him-web.vercel.app/',
        },
        {
            title: 'My Portfolio',
            desc: 'Crafted my current portfolio using react.',
            tools: '#react #javascript #typescript #html #css',
            github: 'https://github.com/jcdevz-dev/jc-portfolio',
            link: 'https://jc-devera.vercel.app/',
        },

    ];
    const [filtered, setFilter] = useState(projectData);
    const [currentFilter, setCurrentFilter] = useState<string>("");

    useEffect(() => {
        if (currentFilter !==""){
            let res: any = projectData.filter(f=> f.tools.includes(currentFilter ) )
            setFilter(res);
        } else {
            setFilter(projectData);
        }
    }, [currentFilter])
    

    const handleFilter = (tool: string) =>{
        if (tool !==""){
            let res = projectData.filter(f=> f.tools.split(" ").includes(tool))
            setFilter(res);
            setCurrentFilter(currentFilter+ " " + tool);
        }
    }
    const handleCloseFilter = (tool: string) =>{
        let filters = currentFilter
        let newFS = filters.split(" ").filter((fs: string)=> fs!==tool)
        setCurrentFilter(newFS.join(" "))
    }

    return(
        <div id="my-projects" className="hero animated fadeInLeft" style={{animationDelay: '.4s'}}>
            <p className="sub">Featured Projects</p>
            { currentFilter !== "" &&  currentFilter.split(" ").map((cf: string, i: number)=>(
                cf !== "" && <span key={i} className="card-tool-bread" onClick={()=>handleCloseFilter(cf)}><span className='card-close'>x</span>{cf}</span>
            )) }
            <div className="wrap">
                {
                    filtered.map((i,q: number)=>(
                        <div className="card" key={q}>
                            <div className="card-header">
                                <Folder color="var(--secondary)" size={32} strokeWidth={1}/>
                                <div className="card-links">
                                    {
                                        i.github !=="" &&
                                        <a href={i.github} target="_blank" rel="noopener noreferrer">
                                            <GitHub className="link-1" color="var(--sublime)" size={18} strokeWidth={1.5}/>
                                        </a>
                                    }
                                    <a href={i.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="link-3" color="var(--sublime)" size={18} strokeWidth={1.5}/>
                                    </a>
                                </div>
                            </div>
                            <div className="card-title">{i.title}</div>
                            <div className="card-body" style={{whiteSpace: 'pre-line'}}>{i.desc}</div>
                            <div className="card-footer">
                                {
                                    i.tools.split(" ").map((t: string, i: number)=>(
                                        <span key={i} className="card-tool">{t}</span>
                                        // <span key={i} className="card-tool" onClick={()=>handleFilter(t)}>{t}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects