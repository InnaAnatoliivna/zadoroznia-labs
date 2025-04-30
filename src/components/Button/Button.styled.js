import styled from '@emotion/styled';

export const StyledButton = styled.button`
    background-color: var(--bc-hero);
    color: var(--color-main-text);
    border: 1.5px solid var(--color-main-text);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-cards-second), var(--shadow-card-inset);
    font-weight: 500;
    letter-spacing: 0em;
    font-size: ${(props) => (props.small ? '14px' : '16px')};
    line-height: 18px;
    padding: ${(props) => (props.small ? '10px 24px' : '12px 40px')} ;
    overflow: hidden;
    white-space: nowrap;

    transition: color linear 500ms, border-color linear 500ms;

    @media (min-width: 768px) {
        color: var(--bc-hero);
        border-color: var(--bc-hero);
        background-color: var(--color-brown);

        transition: color linear 500ms,
        border-color linear 500ms,
        background-color linear 500ms;

        &:hover {
            color: var(--color-brown);
            border-color: var(--color-brown);
            background-color: var(--bc-hero);
        }

    @media screen and (min-width: 1440px) {
        font-size: ${(props) => (props.small ? '14px' : '18px')};
    }
    }
`;

export const ButtonNavigate = styled.button`
    width: 100%;
    padding: 4px 2px;
    font-weight: 500;
    color: var(--color-brown);
    font-size: 9px;

    letter-spacing: 0em;
    overflow: hidden;
    background-color: #d6cfc781;
    border: 1px solid var(--color-brown);
    border-radius: 4px;
    
    display: flex;
    align-items: center;

    position: absolute;
    z-index: 100;

    transition: color linear 500ms,
        border-color linear 500ms,
        background-color linear 500ms;
    &:hover {
            color: var(--color-brown);
            border-color: var(--color-brown);
            background-color: var(--bc-hero);
        }

    @media screen and (min-width: 768px) {
        font-size: 12px;
        text-transform: uppercase; 
        padding: 10px 20px;
        gap: 10px;
        border: 1.5px solid var(--color-brown);
    }
    @media screen and (min-width: 1440px) {
        font-size: 14px;
    }

    svg {
        font-size: 28px;
        color: #c3580b;
    @media screen and (min-width: 768px) {
        font-size: 22px;
    }
    }

`;