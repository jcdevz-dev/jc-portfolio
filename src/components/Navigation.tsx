import {useState} from "react";
import { Sun } from 'react-feather';

const Navigation =(props: any)=>{
    
    const [selected, setselected] = useState([
        {s: true, name: 'About', link: '/#about-me'},
        {s: false, name: 'Projects', link: '/#my-projects'},
        {s: false, name: 'Contact', link: '/#contact-me'},
    ])

    const [show, setshow] = useState(false)

    const updateStatus =(k: number)=>{
        selected.map((i,u)=> i.s = u === k ? true : false)
        setselected([...selected])
        setshow(false)
    }

    return(
        <div className={show? "container animated fadeInDown navMob" : 'container animated fadeInDown'}>
            <a href="/">
                <div className="logo">
                    <div className="draw drawActive draw-logo"></div>
                </div>
            </a>
            <div className="toggleMode">
                <Sun 
                    onClick={()=>props.toggleaction()}
                    className={props.currentmode ? 'link-toggle-active' : 'link-toggle'} 
                    color="var(--secondary)" 
                    size={32} 
                    strokeWidth={1} />
            </div>
            <div className="navbar">
                <div className="icon-bar" onClick={()=>setshow(true)}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <ul className={show? "_Menus-show" : '_Menus-hide'}>
                    <li className="close"><span onClick={()=>setshow(false)}>×</span></li>
                    { selected.map((i,k)=> <li key={k}><a href={i.link} onClick={()=>updateStatus(k)} className={i.s? `selectedLink-${k}` : ''}><span className={`span-${k+1}`}>0{k+1}. </span>{i.name}</a></li> ) }
                </ul>
            </div>
        </div>
    )
}

export default Navigation;