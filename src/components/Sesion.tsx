import '../styles/sesion.css';
export default function Sesion({image,text}) {
    return (
        <div className="container">
        <picture className="sesion">
            <img src={image} alt="" className="sesion__image" />            
        </picture>
        <div className="sesion__text">
            <p className='sesion__text-element'>{text}</p>
        </div>
        </div>
    );
}