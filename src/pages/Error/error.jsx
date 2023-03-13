import { NavLink } from 'react-router-dom'
import './error.css'


function Error() {
    return (
        <div className='error'>
            <h2 className='error-title'>404</h2>
            <p className='error-paragraph'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className="error-link" to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}
 
export default Error