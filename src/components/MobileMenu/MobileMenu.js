import { useEffect } from 'react';
import {
    CloseButton,
    CloseIconStyled,
    MenuWrapper,
    NavList,
    Overlay,
    Text,
    WrappLinks,
    WrappMenu,
} from './MobileMenu.styled';
import Logo from '../Logo/Logo';
import NetworksList from '../NetworksList/NetworksList';

const MobileMenu = ({ showMenu, children }) => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            showMenu();
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            showMenu();
        }
    };

    return (
        <>
            <Overlay onClick={(e) => handleOverlayClick(e)}>
                <MenuWrapper>
                    <WrappMenu>
                        <Logo onClick={handleKeyDown} />
                        <CloseButton onClick={showMenu}>
                            <CloseIconStyled />
                        </CloseButton>
                        <nav>
                            <NavList>
                                {children}
                            </NavList>
                        </nav>
                    </WrappMenu>
                    <WrappLinks>
                        <Text>UMÓW SIĘ</Text>
                        <NetworksList />
                    </WrappLinks>
                </MenuWrapper>
            </Overlay>
        </>
    )
};

export default MobileMenu;