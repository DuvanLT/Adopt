import { useChangeIndex } from '../hooks/useChangeIndex';
import { SliderProps } from '../types/Slider.types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTouch } from '../hooks/useTouch';
export default function Slider({ slides, SlideComponent,styles }: SliderProps) {
    const { currentIndex, nextSlide, prevSlide } = useChangeIndex(slides);
    const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouch(nextSlide, prevSlide);
    const nextIndex = (currentIndex + 1) % slides.length;

    return (
     <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={styles.slider}
    >
      <div className={styles.slider__content}>
        <div className={styles.slider__instructions}>
          <ChevronLeft
            size={48}
            onClick={prevSlide}
            className={`${styles.slider__button} ${styles.slider__button__left}`}
          />
          <ChevronRight
            size={48}
            onClick={nextSlide}
            className={`${styles.slider__button} ${styles.slider__button__right}`}
          />
        </div>
        {SlideComponent && (
          <>
            <div className={styles.slider__current}>
              <SlideComponent slide={slides[currentIndex]} />
              <div className={styles.slider__counter}>
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.slider__counter__element} ${
                      index === currentIndex ? styles.active : ''
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className={styles.slider__next}>
              <SlideComponent slide={slides[nextIndex]} />
            </div>
          </>
        )}
      </div>
    </div>
    )
}
