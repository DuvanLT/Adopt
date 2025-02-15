import { ButtonProps } from "../types/Button.types"
const CustomButton: React.FC<ButtonProps> = ({link,text}) => {
    return(
        <a href={link}>
        <button>{text}</button>
        </a>
    )
}

export default CustomButton;