const Loader =(props: any)=>{
    return(
        <div className="loader" id="loader" style={{opacity: props.isloaded}}>
          <div className="draw drawActive"></div>
        </div>
    )
}

export default Loader