import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { TfiClose } from "react-icons/tfi";
import { slideMenu } from '../../animation.styled';

export const Overlay = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;

  animation: ${slideMenu} 0.5s ease-in-out;
`;

export const WrappMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;

export const WrappLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 70px 0 40px 0; 

  position: relative;
  svg {
    font-size: 30px;
    color: var(--color-black);
  }
`;

export const Text = styled.p`
position: absolute;
top: -48px;

font-size: 15px;
color: var(--color-main-text);

&::after {
        content: '';
        display: block;
        width: 220px;
        height: 1.5px;
        background-color: var(--color-main-text);
        box-shadow: var(--shadow-cards-second);
        border-radius: var(--card-border-radius);

        position: absolute;
        top: 30px;
        right: -72px;
    };
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px 20px;
  background-color: var(--bc-header);
  z-index: 2;
  overflow: auto;

  div {
    display: flex;
    width: 100%;
    svg {
      stroke: rgba(239, 237, 232, 1);
    }
  }
  @media screen and (min-width: 768px) {
    padding: 26px 32px 32px 32px;
  }

  @media screen and (max-width: 1439px) {
    &.shown {
      right: 0;
    }

    &.hidden {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
    }

    transition: right 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 32px;
  background: none;
  border: none;
  cursor: pointer;
  p {
    color:  var(--color-black);
  }
`;


export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  li {
    padding: 10px 27px;
  }
`;

export const Link = styled(NavLink)`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 10px 27px;
  color: var(--color-black);
  border: 1px solid var(--color-main-text);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  border-radius: 12px;

  &:hover,
  :focus {
    border: 1px solid var(--color-black);
  }
`;

// svg close button mob menu

export const CloseIconStyled = styled(TfiClose)`
  font-size: 38px;
  fill: var(--color-main-text);
`