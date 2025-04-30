import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px)  {
        flex-direction: row;
        gap: 20px;
        padding: 60px 0;
    }

    h3 {
        width: 100%;
        color: var(--color-dark);
        font-size: 16px;
        background-color: var(--bc-hero);
        @media screen and (min-width: 768px) {
            font-size: 20px;
        }
        @media screen and (min-width: 1440px) {
            font-size: 24px;
        }
    }
`;

export const ContactInfo = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        width: 254px;
        position: static;
        gap: 12px;
        align-items: flex-start;
        margin-bottom: 0;
    }
    @media screen and (min-width: 1440px) {
        width: 448px;
        align-items: stretch;
    }

    a {
        width: 100%;
        font-size: 12px;
        color: var(--color-main-text);
        display: flex;
        align-items: center;
        gap: 12px;
        @media screen and (min-width: 768px) {
            font-size: 14px;
        }
        @media screen and (min-width: 1440px) {
            font-size: 16px;
        }

        svg {
            font-size: 24px;
        }
    }
`;

export const NerworkStyled = styled.div`
    min-width: 100%;
    height: 40px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bc-hero);

    @media screen and (min-width: 768px) {
        height: 50px;
        font-size: 14px;
    }
    @media screen and (min-width: 1440px) {
        justify-content: center;
        font-size: 16px;
    }

    svg, img {
        width: 75px;
        height: 20px;
        color: var(--color-black);

        @media screen and (min-width: 768px) {
            width: 65px;
            height: 17px;
        }
        @media screen and (min-width: 1440px) {
            width: 110px;
            height: 26px;
        }
    }
`;