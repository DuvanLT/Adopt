import Header from "../components/Header";
import Sesion from "../components/Sesion"
import '../styles/sesion.css';
export default function Adopt() {
   return(
    <>
    <Header />
    <div className="t">
    <Sesion image={"/pexels-rdne-7516476.jpg"} text={"Perros"} />
    <Sesion image={"/pexels-shvetsa-4587958.jpg"} text={"Gatos"} />
    </div>
    </>
   )
}