import { keyframes } from '@emotion/react';

export const slideMenu = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

export const slideModal = keyframes`
    0% {
        transform: rotateX(90deg); 
        opacity: 0; 
    }
    100% {
        transform: rotateX(0); 
        opacity: 1;
    }
`;