import styled from '@emotion/styled';

export const Title = styled.h1`
    font-size: 20px;
    color: var(--color-main-text);
    position: relative;
    padding-bottom: 30px;
    text-shadow: var(--shadow-text-title);

    @media screen and (max-width: 767px)  {
        padding-top: 20px;
        text-align: center;
    }
    @media screen and (min-width: 768px) {
        font-size: 26px;
        padding-bottom: 50px;
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-main-text);
        box-shadow: var(--shadow-cards-second);
        border-radius: var(--card-border-radius);
        box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

        position: absolute;
        top: 78px;
        left: 0;
        @media screen and(max-width: 767px)  {
            top: 65px;
            left: 0;
        }
        @media screen and (min-width: 470px) and (max-width: 767px) {
            display: none;
        }
    };
`;