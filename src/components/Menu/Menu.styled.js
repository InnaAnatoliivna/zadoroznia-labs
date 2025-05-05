import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
    &.desktop {
        height: 100%;
        padding: 50px 0; 
        color: var(--color-main-text);
        font-size: 16px;
        line-height: normal;
        transition: border-bottom linear 100ms;

        &.active {
            color: var(--color-test);
        }
        &:hover {
            border-bottom: 3px solid var(--color-blue);
        }
        @media screen and (max-width: 1439px) {
            padding: 29px 0;
        }
    }

    &.mobile {
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        padding: 10px 27px;
        color: var(--color-main-text);

        &.active {
            color: orange;
        }
    }
`;


export const ListItem = styled.li`
    /* height: 100%; */
`;