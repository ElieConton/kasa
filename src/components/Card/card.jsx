import { Link } from 'react-router-dom'
import logements from '../../../src/utils/logements.json'
import '../../styles/card.css'

function Card () {
    return (
        <div className="cards">
            {logements.map ((element) => (
                <Link to = { `logement/${element.id}`} 
                    key = {element.id} 
                    className="card"
                >
                    <img className='card-img' src = { element.cover } alt = { element.title } />
                    <p className='card-title'> { element.title }</p>
                </Link>
            ))}
        </div> 
    )
}


export default Card

