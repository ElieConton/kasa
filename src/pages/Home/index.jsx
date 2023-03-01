import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/card';
import logements from '../../utils/logements.json';
import './home.css'
import Imgbanner from '../../utils/images/imgbanner.png'

function Home() {
  return (
    <div>
      <Banner>
        <img className='banner-img' src={Imgbanner} alt="banniere forêt et montagne" />
        <h1 className='banner-title'>
            <span>Chez vous,</span>
            <span>partout et ailleurs</span>
        </h1>
      </Banner>
      <div className="cards">
            {logements.map ((element) => (
              <Card id= {element.id} title= {element.title} backgroundSrc= {element.cover} link= { `logement/${element.id}`}/>
             
            ))}
        </div> 
  </div>
  )
}

export default Home;
