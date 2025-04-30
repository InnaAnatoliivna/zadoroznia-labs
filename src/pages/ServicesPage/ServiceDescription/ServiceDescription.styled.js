import styled from '@emotion/styled';
import Button from '../../../components/Button/Button';

export const FlexBox = styled.div`
    display: flex;
    align-items: center;
`;

export const Box = styled.div`
    position: relative;
    width:40%;
    min-height: 100%;
    background-color: #e2cfc2;
    align-self: stretch;
    @media screen and (min-width: 768px) {
    }
`;

export const TextBox = styled.div`
    width: 60%;
    padding: 0 10px;
    @media screen and (min-width: 768px) {
        padding: 0 25px;
    }
    @media screen and (min-width: 1440px) {
        padding: 0 30px;
    }

    p {
        color: var(--color-main-text);
        text-align: center;
        font-size: 14px;
        line-height: 1.2;
        @media screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 1.4;
        }
        @media screen and (min-width: 1440px) {
            font-size: 20px;
        }
    }
`;

export const TitleStyled = styled.h1`
    position: relative; 

    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 15px;
    margin-top: 15px;
    text-align: center;
    word-spacing: 1.8px;
    letter-spacing: 0.5px; 
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 1.4;
    color: var(--color-main-text);

    @media screen and (min-width: 768px) {
        font-size: 18px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 40px;
        font-size: 26px;
    }
`;

export const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;
    @media screen and (min-width: 768px) {
        margin-bottom: 60px;
        gap: 20px;
    }

    @media screen and (max-width: 1439px) {
        flex-wrap: wrap;
    }
`;

export const LinkStyled = styled.div`
    color: var(--color-brown);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    
    transition: color linear 500ms, border-color linear 500ms;
    &:hover {
        border-color: var(--color-dark);
        color: var(--color-brown);
    }
    @media screen and (max-width: 767px) {
        width: 100%;
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
    a {
        font-size: 12px;
    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
    }
`;

export const ButtonTypeStyled = styled(Button)`
    font-weight: 500;
    letter-spacing: 0em;
    font-size: 12px;
    line-height: 1.1;
    padding: 16px 26px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        
        padding: 20px 40px;
        font-size: 16px;
    }
    @media screen and (min-width: 1440px) {
        padding: 20px 40px;
        font-size: 20px;
    }
`;