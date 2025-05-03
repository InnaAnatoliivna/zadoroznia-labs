import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
    &.desktop {
        height: 100%;
        padding: 47px 0; 
        color: var(--color-main-text);
        font-size: 16px;
        line-height: normal;
        transition: border-bottom linear 100ms;

        &.active {
            color: var(--color-test);
        }
        &:hover {
            border-bottom: 3px solid var(--color-main-text);
        }
        @media screen and (max-width: 1439px) {
            padding: 29px 0;
        }
    }

    &.mobile {
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        padding: 10px 27px;
        color: var(--color-black);
        border: 1px solid var(--color-main-text);
        box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
        border-radius: 12px;

        &.active {
            color: orange;
        }
        &:hover, :focus {
            border: 1px solid var(--color-black);
        }
    }
`;


export const ListItem = styled.li`
    /* height: 100%; */
`;