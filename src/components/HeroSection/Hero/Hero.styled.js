import styled from '@emotion/styled';
import imageHero from '../../../images/portret.jpg';
import imgHeroMobile from '../../../images/portret_mob.jpg';
import { StyledButton } from '../../Button/Button.styled';

export const Section = styled.div`
    position: relative;
    /* background-color: #949494; */
    /* @media screen and (min-width: 768px) {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 100% 0%;
    } */
`;

export const BackBox = styled.div`
    position: absolute;
    left: -35%;
    top: -100%;
    z-index:-1;
    width: 1000px;
    height: 1400px;
    background-color: #949494;
`;



export const WrappMob = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: end;
    align-items: end;
    gap: 16px;
    position: relative;
`;

export const ButtonStyled = styled(StyledButton)`
    position: absolute;
    bottom: 150px;
    left: 30%;

    @media (min-width: 768px) {
        bottom: 50%;
        left: -50%;
        padding: 18px 40px;

        @media screen and (min-width: 1440px) {
            bottom: 35%;
            left: -50%;
            padding: 20px 36px;
            font-size: 18px;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1); 
            }
            100% {
                transform: scale(1);
            }
        }
        animation: pulse 2s infinite;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        bottom: -100px;
        left: 26%;
    }
`

export const Wrapper = styled.div`
    height: 580px;
    background-image: url(${imgHeroMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 110%;
    position: relative;

    @media screen and (min-width: 768px) {
        height: 700px;
    }

    @media screen and (min-width: 1440px) {
        background-image: url(${imageHero});
    }
`;
