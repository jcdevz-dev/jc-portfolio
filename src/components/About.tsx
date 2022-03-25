const Hero =()=>{
    return(
        <div id="about-me" className="hero animated fadeInLeft " style={{animationDelay: '.4s'}}>

            <div className="profile-img">
                <img src="/jc.jpg"></img>
            </div>

            <p className="sub" style={{color: 'var(--green)'}}>Hi, my name is</p>
            <h1>John Carlo Devera.</h1>
            <h3>Front-End Developer</h3>
            <code>I've worked with a range of techs in mobile and web development world from Backend To Frontend. Currently more focused on creating fun stuffs on Frontend.</code>
            <div className="line"></div>
            <code className="working">Some technologies I've been working with recently:</code>
            <ul className="skills-list">
                <li>JavaScript (ES5+)</li>
                <li>TypeScript</li>
                <li>Vue</li>
                <li>React</li>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Node.js</li>
                <li>Firestore</li>
                <li>MongoDB</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>Styled Components</li>
            </ul>
        </div>
    )
}

export default Hero