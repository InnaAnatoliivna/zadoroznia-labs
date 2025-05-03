import Container from '../Container/Container';
import {
    Navigation, List, Wrapper,
    MenuIconStyled, ButtonMenu, LinkStyled
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import MenuItems from '../Menu/Menu';
import Logo from '../Logo/Logo';
import { ListItem } from '../Menu/Menu.styled';

const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleMobileMenu = () => setIsOpenMenu(!isOpenMenu);

    // sticky header-------------------------->>>
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    useEffect(() => {
        if (isDesktopOrTablet) {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else { return }
    }, [isDesktopOrTablet]);
    // <<<-----------------------------------


    return (
        <Wrapper isSticky={isSticky}>
            <Container>
                <Navigation>
                    <Logo
                        onClick={handleMobileMenu}

                    />
                    {isMobile && (
                        <ButtonMenu type='button' onClick={handleMobileMenu}>
                            <MenuIconStyled />
                        </ButtonMenu>)
                    }

                    {isDesktopOrTablet && (
                        <List>
                            <MenuItems isMobile={false} />
                        </List>
                    )}

                    {isOpenMenu &&
                        (<MobileMenu showMenu={handleMobileMenu}>

                            <MenuItems isMobile={true} onLinkClick={handleMobileMenu}>
                                <ListItem onClick={handleMobileMenu}>
                                    <LinkStyled to='/'>GłÓWNA</LinkStyled>
                                </ListItem>
                            </MenuItems>
                        </MobileMenu>)}
                </Navigation>
            </Container>
        </Wrapper>
    )
};

export default Header;