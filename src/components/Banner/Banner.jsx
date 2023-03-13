import './banner.css'



function Banner({children, origin}) {
    if(origin === "home"){
        return(
            <div className='banner-home'>
                {children}
            </div>
 )
    } else if(origin === "propos"){
        return(
            <div className='banner-propos'>
                {children}
            </div>
        )
    }
 
}

export default Banner