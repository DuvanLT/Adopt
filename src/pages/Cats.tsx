import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePetContext } from "../context/petContext"
import PetInformation from "../components/PetInformation";
import { PetProps } from "../types/PetInformation.types";
import Sesion from "../components/Sesion";
import ShowCardPets from "../components/ShowCardPets";
import { CUTE_CATS, READY_CATS } from "../constants/petCardToShow";
export default function Cats() {
    const {setPetToAdopt,petToAdopt} = usePetContext()
    return(
        <>
            <Header />
            <ShowCardPets {...CUTE_CATS} onSelectPet={setPetToAdopt}  />
                <div className="t">
                    <Sesion image="https://www.iamschile.com/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2201/files/2021-11/shutterstock_93159637_1440%C3%97316px.png" text="ALIMENTOS" />
                </div>
            <ShowCardPets {...READY_CATS} onSelectPet={setPetToAdopt} />
            {petToAdopt &&(
                <PetInformation {...(petToAdopt as PetProps)} />
            )}
            <Footer />
        </>
    )
}