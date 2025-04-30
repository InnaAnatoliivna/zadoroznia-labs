import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ children, onClick, small, className }) => {
    return (
        <StyledButton
            onClick={onClick}
            small={small}
            type='button'
            className={className}
        >
            {children}
        </StyledButton>
    );
};

export default Button;