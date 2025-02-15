import { CardProps } from "./Card.types"
export interface SliderProps {
    slides: CardProps[]
    SlideComponent?: (props: { slide: CardProps}) => JSX.Element
}