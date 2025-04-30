import React from 'react';
import { Button, ButtonStyled } from './ButtonLink.styled';

const ButtonLink = ({ children, path }) => {
    return (
        <Button>
            <ButtonStyled to={path}>{children}</ButtonStyled>
        </Button>
    )
};

export default ButtonLink;

// how to use >
//<ButtonLink path={'/about-us'}>Czytaj więcej...</ButtonLink>