import Header from "../components/Header"
import PetInformation from "../components/PetInformation"
import Sesion from "../components/Sesion"
import '../styles/sesion.css'
import { usePetContext } from "../context/petContext"
import { PetProps } from "../types/PetInformation.types"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import ShowCardPets from "../components/ShowCardPets"
import { DISCAPACITY_PETS, HEALTHY_PETS, PETS_SMALL } from "../constants/petCardToShow"
export default function Adopt() {
   const {setPetToAdopt,petToAdopt} = usePetContext()
   return(
    <>
    <Header />
    <section className="adoptpage__container">
    <div className="t">
   <Link to={"/dogs"}><Sesion image={"/pexels-rdne-7516476.jpg"} text={"Perros"} /></Link>
   <Link to={"/cats"}><Sesion image={"/pexels-shvetsa-4587958.jpg"} text={"Gatos"} /></Link>
    </div>
    <ShowCardPets {...HEALTHY_PETS} onSelectPet={setPetToAdopt} />
    <ShowCardPets {...DISCAPACITY_PETS} onSelectPet={setPetToAdopt}/>
    <ShowCardPets {...PETS_SMALL} onSelectPet={setPetToAdopt}/>
      {petToAdopt &&(
        <PetInformation {...(petToAdopt as PetProps)} />
      )}
      </section>
      <Footer />
    </>
   )
}