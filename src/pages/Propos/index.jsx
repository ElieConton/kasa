import Collapse from "../../components/collapse/collapse"
import './Propos.css'
import Imgbannerpropos from '../../utils/images/imgbannerpropos.png'
import Banner from "../../components/Banner/Banner"

function Propos() {
    return (
        <div>
            <Banner>
                <img className='banner-img-propos' src={Imgbannerpropos} alt="banniere forêt et montagne" />
            </Banner>
            <Collapse title= {'Fiabilité'}>
                <p className="propos-paragraph">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </p>
            </Collapse>
            <Collapse title= {'Respect'}>
                <p className="propos-paragraph">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </Collapse>
            <Collapse title= {'Service'}>
                <p className="propos-paragraph">
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </p>
            </Collapse>
            <Collapse title= {'Sécurité'}>
                <p className="propos-paragraph">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </Collapse>
        </div>
        )
}

export default Propos