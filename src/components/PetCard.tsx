import { PetProps } from "../types/PetInformation.types";
import '../styles/petcard.css'
export default function PetCard({name,breed,age,height,image} :PetProps) {
    return (
        <>
         <div className="petCard">
            <picture className="petCard__image-container">
                <img src={image[0]} alt="" className="petCard__image" />
            </picture>  
        </div>
         <ul className="petCard__info">
            <li className="petCard__info-element">{breed}</li>
            <li className="petCard__info-element">Size: {height}</li>
            <li className="petCard__info-element">Age: {age}</li>
            </ul>
            <h5 className="petCard__name">{name}</h5>
        </>
    )
}