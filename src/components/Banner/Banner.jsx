import '../../styles/banner.css'
import Imgbanner from '../../utils/images/imgbanner.png'


function Banner() {
 return(
    <div className='banner'>
        <img className='banner-img' src={Imgbanner} alt="banniere forêt et montagne" />
        <h1 className='banner-title'>
            <span>Chez vous,</span>
            <span>partout et ailleurs</span>
        </h1>
    </div>
 )
}

export default Banner