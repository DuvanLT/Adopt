import PetCard from "./PetCard"
import { ShowCardPetsProps } from "../types/ShowCardPets.types"
import '../styles/showcardpets.css'
export default function ShowCardPets({title,array,sliceStart,sliceEnd,onSelectPet}: ShowCardPetsProps) {
    return(
        <>
         <h4 className="t__title">{title}</h4>
              <div className="adopt__pets">
                 {array?.map((pet,index) => (
                    <div key={index} onClick={() => onSelectPet && onSelectPet(pet)} >
                    <PetCard {...pet}/>
                    </div>
                 )).slice(sliceStart,sliceEnd)}
              </div>
        </>
    )
}