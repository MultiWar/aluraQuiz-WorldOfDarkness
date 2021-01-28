import { ReactChild } from "react"
import { BackgroundImage } from "./styles"

const MainDiv = ({bgImage, children}: {bgImage: string, children: ReactChild[]}) => {
    return (
        <BackgroundImage backgroundImage={bgImage}>
            {children}
        </BackgroundImage>
    )
}

export default MainDiv