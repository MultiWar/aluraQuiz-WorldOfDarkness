import { ButtonHTMLAttributes } from "react"
import { ButtonEstilizado } from "./styled"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const Button = ({text, ...props}: ButtonProps) => {
    return (
        <ButtonEstilizado {...props}>
            {text}
        </ButtonEstilizado>
    )
}

export default Button