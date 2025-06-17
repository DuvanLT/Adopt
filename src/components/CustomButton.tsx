import { Link } from "react-router-dom";
import { ButtonProps } from "../types/Button.types"
const CustomButton: React.FC<ButtonProps> = ({link,text}) => {
    return(
        <Link to={link}>
        <button>{text}</button>
        </Link>
    )
}

export default CustomButton;