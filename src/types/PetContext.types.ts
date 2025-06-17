import { PetProps } from "./PetInformation.types";

export interface PetContextType {
  petToAdopt: PetProps | null;
  setPetToAdopt: React.Dispatch<React.SetStateAction<PetProps | null>>;
}
