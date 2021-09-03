const Hero =()=>{
    return(
        <div id="about-me" className="hero animated fadeInLeft row" style={{animationDelay: '.4s'}}>
            <div>
                <p className="sub">Hi, my name is</p>
                <h1>John Carlo Devera.</h1>
                <h3>Full Stack Developer</h3>
                <code>I've worked with a range of techs in mobile and web development world from Backend To Frontend. Currently more focused on creating fun stuffs on Frontend.</code>
            </div>
            <div>
                <img src='./profile.jpg' width={240} height="auto"/>
                <ul>
                    {/* <li>12312312312312</li>
                    <li>12312312312312</li>
                    <li>12312312312312</li>
                    <li>12312312312312</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Hero