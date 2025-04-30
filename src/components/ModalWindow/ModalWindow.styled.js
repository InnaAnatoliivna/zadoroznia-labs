import styled from '@emotion/styled';
import { TfiClose } from "react-icons/tfi";
import { slideModal } from '../../animation.styled';

export const WindowStyle = styled.div`
    max-width: 100%;
    width: 280px;
    max-height: 500px;
    z-index: 200;
    position: absolute;
    top: 160px;
    border-radius: 12px;
    border: 1px solid var(--color-brown);
    background-color: var(--bc-header);
    color: var(--color-main-text);
    padding: 30px 18px;

    animation: ${slideModal} 0.5s ease-in-out;


    @media screen and (min-width: 400px) {
        width: 350px;
    }
    @media screen and (min-width: 768px) {
        max-height: 600px;
        width: 500px;
        padding: 30px;
        top: 110px;
    }
    @media screen and (min-width: 1440px) {
        max-height: 700px;
        width: 500px;
        top: 180px;
        padding: 40px 30px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        top: 26px;
        right: 32px;
    }
    p {
        color:  var(--color-black);
    }
`;

// svg close button mob menu
export const CloseIconStyled = styled(TfiClose)`
    margin-left: auto;
    font-size: 20px;
    fill: var(--color-main-text);
`;
//-------------------------

export const ModalTitle = styled.h2`
    text-align: center;
    transform: uppercase;
    font-size: 16px;
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;

export const Text = styled.h3`
    text-align: center;
    margin: 12px 0;
    font-size: 14px;
    line-height: 1.2;

    display: flex;
    flex-direction: column;
    gap: 16px;
    @media screen and (min-width: 768px) {
        font-size: 18px;
        margin: 15px 0;
    }
    @media screen and (min-width: 1440px) {
        margin: 20px 0;
    }
    p {
        display: flex; 
        align-items: center;
        justify-content: center;
        gap: 8px;
        svg {
            font-size: 18px;
            @media screen and (min-width: 768px) {
                font-size: 25px;
            }
        }
    }
    a {
        color: var(--color-black);
        transition: transform 0.5s ease;
        transform: scale(1);
        &:hover, &:focus {
            transform: scale(1.1); 
        }
    }
`;

export const ModalContent = styled.div`
`;

export const NetworksWrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    @media screen and (min-width: 768px) {
        gap: 30px;
    }
    a {
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        transition: transform 0.3s ease; 
    }
    svg {
        font-size: 40px;
        color: var(--color-black);
        transition: transform 0.5s ease; 
    }
    a:hover svg, a:focus svg {
        transform: scale(1.1); 
    }
    a:hover img, a:focus img {
        transform: scale(1.1); 
    }
`;