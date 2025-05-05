import React from 'react'
import { Wrapper } from './ContentCard.styled'

const ContentCard = ({ children }) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
};

export default ContentCard;