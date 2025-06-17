import '../styles/sesion.css'
import { SesionProps } from '../types/Sesion.types'
export default function Sesion({image,text}: SesionProps) {
    return (
        <div className="container">
        <picture className="sesion">
            <img src={image} alt="" className="sesion__image" />            
        </picture>
        <div className="sesion__text">
            <p className='sesion__text-element'>{text}</p>
        </div>
        </div>
    )
}