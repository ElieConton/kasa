import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/card';
import Collapse from '../../components/collapse/collapse';
import logements from '../../utils/logements.json';
import './home.css'

function Home() {
  return (
    <div>
      <Banner/>
      <Collapse title={"collapse"}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Collapse>
      <div className="cards">
            {logements.map ((element) => (
              <Card id= {element.id} title= {element.title} backgroundSrc= {element.cover} link= { `logement/${element.id}`}/>
             
            ))}
        </div> 
  </div>
  )
}

export default Home;
