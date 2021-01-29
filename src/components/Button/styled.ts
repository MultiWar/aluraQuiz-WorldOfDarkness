import styled from "styled-components";

export const ButtonEstilizado = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-top: 15px;
    border: 0;
    width: 100%;
    padding: 14px 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.3;
    text-transform: uppercase;
    outline: 0;
    transition: .3s;
    cursor: pointer;
    &:hover,
    &:focus {
        opacity: .5;
    }
    &:disabled {
        background-color: #979797;
        cursor: not-allowed;
    }
`;