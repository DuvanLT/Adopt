import { PetProps } from "./PetInformation.types";

export interface ShowCardPetsProps {
    title?:string, 
    array?:PetProps[], 
    sliceStart?:number,
    sliceEnd?:number,
    onSelectPet?: (pet: PetProps) => void
}