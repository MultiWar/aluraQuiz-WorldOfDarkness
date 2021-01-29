import React, { InputHTMLAttributes } from "react"
import { InputEstilizado } from "./styled"

const Input = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({...props}, ref) => {
    return (
        <div>
            <InputEstilizado ref={ref} {...props} />
        </div>
    )
})

export default Input