import { ShowCardPetsProps } from "../types/ShowCardPets.types"
import { PETS_DISCAPACITY, PETS_HEALHTS,PETS_SMALLS } from "./filterPets"
import { CATS } from "./cats"
import { DOGS } from "./dogs"
export const HEALTHY_PETS: ShowCardPetsProps = {
    title:"MASCOTAS PARA ADOPTAR",
    array:PETS_HEALHTS,
    sliceStart:0,
    sliceEnd:8,
}
export const DISCAPACITY_PETS: ShowCardPetsProps = {
    title:"AMOR INCONDICIONAL EN TODAS PARTES",
    array:PETS_DISCAPACITY,
    sliceStart:0,
    sliceEnd:8, 
}
export const PETS_SMALL: ShowCardPetsProps = {
    title:"INCLUSO LOS MÁS PEQUEÑOS TIENEN UN GRANDE CORAZON",
    array:PETS_SMALLS,
    sliceStart:0,
    sliceEnd:8,
}
export const CUTE_CATS: ShowCardPetsProps = {
    title:"LOS FELINOS MÁS TIERNOS",
    array:CATS,
    sliceStart:0,
    sliceEnd:8,
}

export const READY_CATS:ShowCardPetsProps = {
    title:"¿ESTAS LISTO PARA SEGUIR SUS ORDENES?",
    array:CATS,
    sliceStart:8,
    sliceEnd:20,
}

export const LOYAL_DOGS: ShowCardPetsProps = {
    title:"LOS MÁS FIELES DEL UNIVERSO",
    array:DOGS,
    sliceStart:0,
    sliceEnd:8 
}
export const GUAG_DOGS: ShowCardPetsProps = {
    title:"NO OLVIDES DECIR ¡GUAU!",
    array:DOGS,
    sliceStart:8,
    sliceEnd:20,
}

