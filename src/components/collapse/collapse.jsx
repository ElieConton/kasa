import {useState} from "react";
import './collapse.css'
import FlecheHaut from './fleche_haut.png'
import FlecheBas from './fleche_bas.png'

function Collapse({title, children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{ setIsOpen(!isOpen)}

    return  (
        <div className="collapse">
            <button className="collapse-button" onClick={toggle}>
                {title}
                {isOpen ?  (
                    <img className="collapse-img" src={FlecheHaut} alt="fleche vers le haut" />
                ) : (
                    <img className="collapse-img" src={FlecheBas} alt="fleche vers le bas" />
                )}
            </button>
            {isOpen ? ( 
                <div>{children}</div>
            ) : null}
        </div>
    )
}


export default Collapse