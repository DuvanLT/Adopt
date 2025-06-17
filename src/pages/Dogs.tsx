import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePetContext } from "../context/petContext"
import PetInformation from "../components/PetInformation";
import { PetProps } from "../types/PetInformation.types";
import Sesion from "../components/Sesion";
import '../styles/sesion.css'
import ShowCardPets from "../components/ShowCardPets";
import { GUAG_DOGS, LOYAL_DOGS } from "../constants/petCardToShow";
export default function Dogs() {
    const {setPetToAdopt,petToAdopt} = usePetContext()
    return(
        <>
            <Header />
            <ShowCardPets {...LOYAL_DOGS} onSelectPet={setPetToAdopt} />
                <div className="t">
                  <Sesion image="https://www.purina.com.bo/sites/default/files/2022-10/purina-brand-alimento-perros-adultos-mayores-banner-desktop.png" text="ALIMENTOS" />
                  </div>
            <ShowCardPets {...GUAG_DOGS} onSelectPet={setPetToAdopt} />
            {petToAdopt &&(
                <PetInformation {...(petToAdopt as PetProps)} />
            )}
            <Footer />
        </>
    )
}