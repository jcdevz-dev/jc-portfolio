import React, {useState} from "react";

const Navigation =()=>{
    
    const [selected, setselected] = useState([
        {s: true, name: 'About', link: '#about-me'},
        {s: false, name: 'Projects', link: '#my-project'},
        {s: false, name: 'Contact', link: '#contact-me'},
    ])

    const Show =()=> {
        var navList = document.getElementById("nav-lists");
        navList?.classList.add("_Menus-show");
    }
    
    const Hide =()=> {
        var navList = document.getElementById("nav-lists");
        navList?.classList.remove("_Menus-show");
    }

    const updateStatus =(k: number)=>{
        selected.map((i,u)=> i.s = u === k ? true : false)
        setselected([...selected])
    }

    return(
        <div className="container">
            <div className="logo">
                <a href="#"><img src="./logo-square.png" alt="jc"/></a>
            </div>
            <div className="navbar">
                <div className="icon-bar" onClick={()=>Show()}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>

                <ul id="nav-lists">
                    <li className="close"><span onClick={()=>Hide()}>×</span></li>
                    { selected.map((i,k)=> <li key={k}><a href={i.link} onClick={()=>updateStatus(k)} className={i.s? 'selectedLink' : ''}>{i.name}</a></li> ) }
                </ul>
            </div>
        </div>
    )
}

export default Navigation;