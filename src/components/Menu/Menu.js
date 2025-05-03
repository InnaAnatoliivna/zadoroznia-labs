import dataMenu from '../../resources/menuList.json';
import { LinkStyled, ListItem } from './Menu.styled';

const MenuItems = ({ isMobile, onLinkClick, children }) => {

    return (
        <>
            {isMobile && (children)}
            {dataMenu.map((menuItem, index) => (
                <ListItem key={index}>
                    <LinkStyled
                        to={menuItem.link}
                        className={isMobile ? 'mobile' : 'desktop'}
                        onClick={onLinkClick}
                    >
                        {menuItem.name}
                    </LinkStyled>
                </ListItem>
            ))}
        </>
    )

};

export default MenuItems;
