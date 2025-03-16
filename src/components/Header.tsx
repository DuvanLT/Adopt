import { useToggleMenu } from "../hooks/useToggleMenu"
import { Menu } from "lucide-react"
import { PawPrint } from 'lucide-react'
import { Link } from "react-router-dom"
import '../styles/header.css'
import CustomButton from "./CustomButton"
export default function Header() {
    const {isOpen,toggleMenu} = useToggleMenu()
    return(
        <header>
            <picture className="logo">
                <PawPrint size={32} />
            </picture>
            <nav>
                <ul className={`nav-list ${isOpen ? "show-nav" : ""}`}>
                    <li><Link to="/" className="nav-element">Inicio</Link></li>
                    <li>Conoce</li>
                    <li>Nosotros</li>
                    <li><Link  to="/adopt"><CustomButton text="ADOPTAR AHORA" link="" /></Link></li>
                </ul>
            </nav>
            <picture onClick={toggleMenu} className="menu-hamburger">
               <Menu />
            </picture>
        </header>
    )
}