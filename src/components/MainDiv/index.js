import { BackgroundImage } from "./styles"

const MainDiv = ({bgImage, children}) => {
    return (
        <BackgroundImage backgroundImage={bgImage}>
            {children}
        </BackgroundImage>
    )
}

export default MainDiv