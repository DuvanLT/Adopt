
import '../styles/banner.css'
import { BannerProps } from '../types/Banner.types'
const Banner: React.FC<BannerProps & {ButtonComponent?: React.FC}> 
=({title,description,imageUrl,ButtonComponent,styleBanner}) => {
    //se debe pasar el estilo por medio de prop classname para evitar dañar el responsive con ReactCSS
    return(
        <>
        <section className={`banner  ${styleBanner}`}>
            <div className="banner__information">
                <h1 className='banner__information-title'>{title}</h1>
                <p className='banner__information-description'>{description}</p>
                {ButtonComponent && <ButtonComponent/>}
            </div>
            <picture className="banner__illustration">
                { imageUrl && <img src={imageUrl} alt="" />}
            </picture>
        </section>
        </>
        )
} 
export default Banner