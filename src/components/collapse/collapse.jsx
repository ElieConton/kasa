import {useState} from "react";
import './collapse.css'
import FlecheHaut from './fleche_haut.png'
import FlecheBas from './fleche_bas.png'

function Collapse({title, children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{ setIsOpen(!isOpen)}

    return  (
        <div className="collapse">
            <button className="collapseButton" onClick={toggle}>
                {title}
                {isOpen ?  (
                    <img className="collapseImg" src={FlecheHaut} alt="fleche vers le haut" />
                ) : (
                    <img className="collapseImg" src={FlecheBas} alt="fleche vers le bas" />
                )}
            </button>
            {isOpen ? ( 
                <div>{children}</div>
            ) : null}
        </div>
    )
}


export default Collapse