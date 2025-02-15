import Header from '../components/Header'
import Banner from '../components/Banner'
import BannerList from '../components/BannerList'
import CustomButton from '../components/CustomButton'
import { BANNER_HERO,BANNER_ONE,BANNER_TWO,BANNER_THREE,BANNER_FOUR,BANNER_FIFHT,BANNER__SIXTH } from '../constants/banners'
import Slider from '../components/Slider'
import { SLIDER_HOME } from '../constants/sliders'
import Card from '../components/Card'
import Footer from '../components/Footer'
export default function Home() {
    return(
    <>
     <Header/>
     <Banner {...BANNER_HERO}
      ButtonComponent={() => <CustomButton text="ADOPTAR AHORA" link="" />}/>
     <BannerList list={["El lugar perfecto para:","Conocer historias","Hacer amigos","Sentirse identificado","Regresar sonrisas"]} />
     <Banner {...BANNER_ONE}/>
     <Banner {...BANNER_TWO} 
     ButtonComponent={() => <CustomButton text="HOGAR PARA TODOS" link="" />}/>
     <Banner {...BANNER_THREE}/>
     <Banner {...BANNER_FOUR} 
     ButtonComponent={() =><CustomButton text="DAR EL PRIMER PASO" link="" />}/>
     <Banner {...BANNER_FIFHT} />
     <Slider slides={SLIDER_HOME} SlideComponent={(SLIDER_HOME)=><Card cardContent={SLIDER_HOME.slide}/>}/>
     <Banner {...BANNER__SIXTH}
     ButtonComponent={() => <CustomButton text="ADOPTAR HOY" link="" />}/>
     
     <Footer />
    </>
    )
}