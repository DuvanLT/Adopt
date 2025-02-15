import '../styles/bannerList.css'
import { BannerListProps } from '../types/BannerList.types'
const BannerList: React.FC<BannerListProps> = ({list}) => {
    return(
        <div className="banner__bottom">
        <ul className='banner__bottom-list'>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
    )
}

export default BannerList