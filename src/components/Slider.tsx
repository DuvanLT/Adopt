import '../styles/slider.css'
import { useChangeIndex } from '../hooks/useChangeIndex'
import { SliderProps } from '../types/Slider.types'
import { ChevronLeft,ChevronRight} from 'lucide-react'
import { useTouch } from '../hooks/useTouch'


export default function Slider({ slides, SlideComponent }: SliderProps) {
    const { currentIndex, nextSlide, prevSlide } = useChangeIndex(slides)
    const {handleTouchStart,handleTouchMove,handleTouchEnd} = useTouch(nextSlide,prevSlide)
    return (
        <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="slider">
            <ChevronLeft size={48} 
             onClick={prevSlide} className="slider__button slider__button--left"  />
             <div className="slider__content">
            {SlideComponent && <SlideComponent slide={slides[currentIndex]} />}
            <div className="slider__counter">
            {slides.map((_,index) => (
                <div key={index} className={`slider__counter-element ${index === currentIndex ? 'active' : ''}`}></div>
            ))}
            </div>
            </div>
            <ChevronRight size={48} 
             onClick={nextSlide} className="slider__button slider__button--right" />
        </div>
    )
}
