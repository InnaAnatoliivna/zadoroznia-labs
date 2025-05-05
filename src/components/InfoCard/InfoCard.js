import React from 'react';
import { Wrapper } from './InfoCard.styled';

const InfoCard = ({ children }) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
};

export default InfoCard;