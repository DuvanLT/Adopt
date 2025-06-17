import '../styles/petinformation.css';
import { Phone } from 'lucide-react';
import { XCircle } from 'lucide-react';
import { PetProps } from '../types/PetInformation.types';
import { usePetContext } from "../context/petContext";
import ImageSlide from './ImageSlide';
import Slider from '../components/Slider'
import sliderStylesPet from '../styles/sliderPetInformation.module.css'
export default function PetInformation({name,breed,age,birthday,likes,discapacity,dislikes,height,image} :PetProps) {
    const {setPetToAdopt} = usePetContext()
    return (
        <>
         <div className="pet__overlay" onClick={() => setPetToAdopt(null)} />
        <div className="Pet_container">
            <div className='pet__picture'>
            <Slider SlideComponent={ImageSlide} slides={image} styles={sliderStylesPet}  />
            </div>
            <XCircle color='#fff' width={32} height={32} className='pet__close' onClick={() => setPetToAdopt(null)}  />
            <div className="pet__information">
            <div className="pet__information-element">
                <span><b>Nombre:</b> {name}</span>
                <span><b>Raza:</b> {breed}</span>
            </div>
            <div className="pet__information-element">
                <span><b>Edad:</b> {age}</span>
                <span><b>Cumpleaños:</b> {birthday}</span>
            </div>
            {likes && 
            <div className="pet__information-element">
            <p className='pet__information-likes'><b>Le gusta:</b> {likes}</p>
            </div>
            }
            { dislikes &&
            <div className="pet__information-element">
                <p className='pet__information-likes'><b>Disguta:</b> {dislikes}</p>
            </div>
            }
            {discapacity && 
            <div>
                <p className='pet__information-likes'><b>Discapacidad:</b> {discapacity}</p>
                <p className='pet__information-likes'><b>Tamaño:</b> {height}</p>
            </div>
             }
        </div>
        <button className='pet_contact'>
            <Phone />
            ADOPTAR</button>
        </div>
    </>
    );
}