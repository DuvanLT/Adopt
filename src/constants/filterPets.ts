import { DOGS } from "../constants/dogs"
import { CATS } from "../constants/cats"
import { PetProps } from "../types/PetInformation.types";
export const PETS: PetProps[] = [...DOGS, ...CATS];
export const PETS_DISCAPACITY = PETS.filter((pet) => pet.discapacity != null)
export const PETS_HEALHTS = PETS.filter((pet) => pet.discapacity == null)
export const PETS_SMALLS = PETS.filter((pet) => pet.height === "pequeño")

