import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import logements from '../../utils/logements.json';
import './home.css'


function Home() {
  return (
    <div>
      <Banner origin="home">
        <h1 className='banner-title'>
            <span>Chez vous,</span>
            <span>partout et ailleurs</span>
        </h1>
      </Banner>
      <div className="cards">
            {logements.map ((element) => (
              <Card  key= {element.id} title= {element.title} backgroundSrc= {element.cover} link= { `logement/${element.id}`}/>
             
            ))}
        </div> 
  </div>
  )
}

export default Home;
