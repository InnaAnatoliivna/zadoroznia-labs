import styled from '@emotion/styled';
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100vw;
    background-color: ${({ isSticky }) => (isSticky ? '#efefef9a' : 'var(--bc-header)')};
    border-bottom: 1px solid #e7e9fc;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    /* --for sticky-->>> */
    z-index: 1000;
    transition: background-color linear 0.3s, box-shadow linear 0.3s;
    position: ${({ isSticky }) => (isSticky ? 'fixed' : 'relative')};
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.ul`
    width: 100%;
    max-width: 740px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 768px) {
        gap:18px;
    }
`;

export const ButtonMenu = styled.button`
    background-color: transparent;
`

//svg mobile menu

export const MenuIconStyled = styled(CiMenuBurger)`
    font-size: 50px;
    fill: var(--color-main-text);
`;

export const LinkStyled = styled(Link)`
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
    a {
        color: var(--color-main-text);
    }
`;