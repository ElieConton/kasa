import {useState} from "react";
import './collapse.css'
import FlecheHaut from './fleche_haut.png'
import FlecheBas from './fleche_bas.png'

function Collapse({title, children}) {
    const [isOpen, setIsOpen] = useState(false)


    return isOpen ? (
        <div className="collapse">
            <button className="collapseButtonOpen" onClick={() => setIsOpen(false)}>
                {title}
                <img className="collapseImg" src={FlecheHaut} alt="fleche vers le haut" />
            </button>
            <div>{children}</div>
        </div>
    ) : (
        <div className="collapse">
            <button className="collapseButtonClose" onClick={() => setIsOpen(true)}>
                {title}
                <img className="collapseImg" src={FlecheBas} alt="fleche vers le bas" />
            </button>
        </div>
    )
}


export default Collapse