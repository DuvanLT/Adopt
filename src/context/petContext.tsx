import { createContext, useContext, useState, ReactNode } from "react"
import { PetProps } from "../types/PetInformation.types"
import { PetContextType } from "../types/PetContext.types"

const PetContext = createContext<PetContextType | undefined>(undefined)


export default function PetProvider({ children }: { children: ReactNode }) {
  const [petToAdopt, setPetToAdopt] = useState<PetProps | null>(null)

  return (
    <PetContext.Provider value={{ petToAdopt, setPetToAdopt }}>
      {children}
    </PetContext.Provider>
  )
}

export function usePetContext() {
  const context = useContext(PetContext);
   if (!context) {
    throw new Error("usePetContext must be used within a PetProvider");
  }
  return context;
}
