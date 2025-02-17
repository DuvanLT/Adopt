import { useRef } from "react"

export function useTouch(nextSlide: () => void, prevSlide: () => void){
const touchStartX = useRef<number | null>(null)
const touchEndX = useRef<number | null>(null)

const handleTouchStart = (event: React.TouchEvent) => { touchStartX.current = event.touches[0].clientX}
const handleTouchMove = (event: React.TouchEvent) => {touchEndX.current = event.touches[0].clientX}
const handleTouchEnd  = () => {
    if(touchStartX.current !== null && touchEndX.current !== null){
        const distanceTouched = touchStartX.current - touchEndX.current
        if(distanceTouched > 100){
            nextSlide() //left 
        }else if (distanceTouched < 100){
            prevSlide() //right
        }
    }
    touchStartX.current = null
    touchEndX.current = null
}
return {handleTouchStart,handleTouchMove,handleTouchEnd}
}