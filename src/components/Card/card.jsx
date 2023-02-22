import { Link } from 'react-router-dom'
import './card.css'

function Card ({id, title, backgroundSrc, link}) {
    return (
        
                <Link to = {link} 
                    key = {id} 
                    className="card"
                >
                    <img className='card-img' src = {backgroundSrc } alt = {title } />
                    <p className='card-title'> {title}</p>
                </Link>
            )}
       


export default Card

