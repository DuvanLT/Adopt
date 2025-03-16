import '../styles/petinformation.css';
import { Phone } from 'lucide-react';
import { XCircle } from 'lucide-react';
export default function PetInformation() {
    return (
        <div className="Pet_container">
            <picture className='pet__picture'>
                <img src="/peludo.jpg" alt="" className='pet__picture-image' />
            </picture>
            <XCircle color='#fff' width={32} height={32} className='pet__close' />
            <div className="pet__information">
            <div className="pet__information-element">
                <span><b>Name:</b> Tudy</span>
                <span><b>Breed:</b> Pitbull</span>
            </div>
            <div className="pet__information-element">
                <span><b>Age:</b> 4</span>
                <span><b>Birthday:</b> 12/02/2020</span>
            </div>
            <div className="pet__information-element">
                <p className='pet__information-likes'><b>Likes:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident laborum corrupti, incidunt non explicabo ullam perspiciatis repellat vitae odio molestias vero ipsa voluptatibus optio animi at itaque. Reiciendis, aperiam.</p>
            </div>
            <div className="pet__information-element">
                <p className='pet__information-likes'><b>Dislikes:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident laborum corrupti, incidunt non explicabo ullam perspiciatis repellat vitae odio molestias vero ipsa voluptatibus optio animi at itaque. Reiciendis, aperiam.</p>
            </div>
            <div>
                <p className='pet__information-likes'><b>Discapacity:</b> N/A</p>
            </div>
        </div>
        <button className='pet_contact'>
            <Phone />
            ADOPT ME</button>
        </div>
    );
}