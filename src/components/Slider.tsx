import '../styles/slider.css';
import { useChangeIndex } from '../hooks/useChangeIndex';
import { SliderProps } from '../types/Slider.types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTouch } from '../hooks/useTouch';

export default function Slider({ slides, SlideComponent }: SliderProps) {
    const { currentIndex, nextSlide, prevSlide } = useChangeIndex(slides);
    const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouch(nextSlide, prevSlide);
    const nextIndex = (currentIndex + 1) % slides.length;

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="slider"
        >
            <div className="slider__content">
            <div className="slider__instructions">
            <ChevronLeft
                size={48}
                onClick={prevSlide}
                className="slider__button slider__button--left"
            />
            <ChevronRight
                size={48}
                onClick={nextSlide}
                className="slider__button slider__button--right"
            />
            </div>
                {SlideComponent && (
                    <>
                        <div className="slider__current">
                            <SlideComponent slide={slides[currentIndex]} />
                            <div className="slider__counter">
                            {slides.map((_,index) => (
                                <div key={index} className={`slider__counter-element ${index === currentIndex ? 'active' : ''}`}></div>
                            ))}
                            </div>
                        </div>
                        <div className="slider__next">
                            <SlideComponent slide={slides[nextIndex]} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
