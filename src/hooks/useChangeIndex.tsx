import { useState } from 'react'
import { CardProps } from '../types/Card.types'
export function useChangeIndex(sliderContent:CardProps[]) {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length)
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderContent.length) % sliderContent.length)
    }
    return {currentIndex,nextSlide,prevSlide}
}

