import { CardProps } from "../types/Card.types"
import '../styles/card.css'
export default function Card({cardContent}: {cardContent: CardProps}) {
    return(
        <div className="card">
            <picture className="card__image-container">
                <img src={cardContent.image} alt="" className="card__image" />
            </picture>
            <p className="card__text">{cardContent.description}</p>
            <h4 className="card__name">{cardContent.name}</h4>
        </div>
    )
}