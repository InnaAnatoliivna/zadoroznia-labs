import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.div`
    width: 180px;
    color: var(--color-brown);
    border: 1.5px solid var(--color-main-text);
    background-color: var(--bc-hero);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    
    transition: color linear 500ms, border-color linear 500ms;

    &:hover {
        border-color: var(--color-dark);
        color: var(--color-brown);
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        width: 200px;
    }
        @media screen and (min-width: 1440px) {
        width: 230px;
        font-size: 16px;
    }
    @media (min-width: 768px) {
        transition: color linear 500ms,
        border-color linear 500ms,
        background-color linear 500ms;
        &:hover {
            color: var(--bc-hero);
            border-color: var(--bc-hero);
            background-color: var(--color-brown);
        }
    }
`

export const ButtonStyled = styled(Link)`
    width: 100%;
    display: inline-block;
    text-align: center;

    color: inherit;
    font-weight: 500;
    letter-spacing: 0em;
    font-size: 14px;
    line-height: 1.1;
    padding: 16px 26px;
    overflow: hidden;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        padding: 20px 40px;
        font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
        padding: 20px 40px;
        font-size: 18px;
    }
`;