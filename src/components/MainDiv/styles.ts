import styled from "styled-components";
import db from '../../db.json'

export const BackgroundImage = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${({backgroundImage}: {backgroundImage: string}) => backgroundImage});
    background-color: ${({ theme }) => theme.colors.mainBg};
    flex: 1;
    @media screen and (max-width: 500px) {
        background-image: none;
        &:after {
            content: "";
            background-size: cover;
            background-position: center;
            background-image:
                linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
                url(${db.bg});
            display: block;
            width: 100%;
            height: 210px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
        }
        *:first-child {
            position: relative;
            z-index: 10;
        }
    }
`