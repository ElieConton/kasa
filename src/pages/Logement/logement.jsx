import { useParams } from 'react-router-dom';
import logements from '../../utils/logements.json';
import Tag from '../../components/Tag/tag';
import './logement.css'
import Rating from '../../components/Rating/rating';
import Host from '../../components/Host/host';
import Collapse from '../../components/Collapse/collapse';
import Caroussel from '../../components/Carrousel/carrousel';
import Error from '../Error/error';


function Logement() {
    const{ id } = useParams();
    const logement = logements.find(item => item.id === id)
    if (!logement) return <Error />
    

    return (
        <div>
            <Caroussel pictures={logement.pictures}/>
            <h2 className='logement-title'>{logement.title}</h2>
            <h3 className='logement-location'>{logement.location}</h3>
            <Tag tags={logement.tags}/>
            <div className='host-rating'>
                <Rating ratings={logement.rating}/>
                <Host host={logement.host}/>
            </div>
            <Collapse title='Description'>
                <p className='logement-description'>
                    {logement.description}
                </p>
            </Collapse>
            <Collapse title='Equipements' >
                <ul className='logement-equipments'> 
                    {logement.equipments.map((equipement, idx) => {
                        return(
                            <li key={idx}>
                                {equipement}
                            </li>
                    )
                })}
                </ul>
            </Collapse>
        </div>
    )
}

export default Logement