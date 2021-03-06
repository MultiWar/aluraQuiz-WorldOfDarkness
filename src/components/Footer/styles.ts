import styled from "styled-components";
import {motion} from 'framer-motion'

export const FooterWrapper = styled(motion.footer)`
    background-color: #00000080;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    img {
        width: 58px;
        margin-right: 23px;
    }
    a {
        color: white;
        text-decoration: none;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }
        span {
            text-decoration: underline;
        }
    }
`;