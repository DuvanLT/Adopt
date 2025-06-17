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
            <Link to="/" className="nav-element">
            <picture className="logo">
                <PawPrint size={32} />
            </picture></Link>
            <nav>
                <ul className={`nav-list ${isOpen ? "show-nav" : ""}`}>
                    <li><Link to="/" className="nav-element">Inicio</Link></li>
                    <li>Conoce</li>
                    <li>Nosotros</li>
                    <li><CustomButton text="ADOPTAR AHORA" link="/adopt" /></li>
                </ul>
            </nav>
            <picture onClick={toggleMenu} className="menu-hamburger">
               <Menu />
            </picture>
        </header>
    )
}