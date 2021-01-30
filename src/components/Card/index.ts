import styled from "styled-components";

export const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    max-width: 350px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => {
        return theme.colors.mainBg;
    }};
    border-radius: 4px;
    overflow: hidden;
    h1, h2, h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }
    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
    }
`
export const WidgetHeader = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};

    h1 {
        font-size: 20px;
    }

    * {
        margin: 0;
    }
`;

export const WidgetContent = styled.div`
    padding: 24px 32px 32px 32px;
    & > *:first-child {
        margin-top: 0;
    }
    & > *:last-child {
        margin-bottom: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    
    h2 {
        font-size: 18px;
    }
`

export const QuestionAlternative = styled.a`
    outline: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => `${theme.colors.primary}50`};
    padding: 10px 15px;
    margin-bottom: 8px;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: .3s;
    display: block;

    &[data-isSelected=true] {
        opacity: .5;
    }

    &[data-status="NOTSELECTED"] {
        opacity: .5;
    }

    &[data-status="WRONG"] {
        opacity: 1;
        background-color: ${({theme}) => theme.colors.wrong};
    }

    &[data-status="CORRECT"] {
        opacity: 1;
        background-color: ${({theme}) => theme.colors.success};
    }

    &:hover,
    &:focus {
        opacity: .5;
    }

    & input {
        display: none;
    }
`