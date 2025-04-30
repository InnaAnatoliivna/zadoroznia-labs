import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import { NetworksWrapp, Text, CloseButton, CloseIconStyled, WindowStyle, ModalTitle, ModalContent } from './ModalWindow.styled';
import NetworksList from '../NetworksList/NetworksList';
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md"; import { FaLink } from "react-icons/fa6";
import dataContakt from '../../resources/dataContacts.json';

const ModalWindow = ({ toggleShowMenu }) => {
    const [isCloseModal, setIsCloseModal] = useState(false);

    const handleCloseModal = () => {
        setIsCloseModal(!isCloseModal);
        toggleShowMenu();
    };

    return createPortal(
        <Backdrop closeModal={toggleShowMenu}>
            <WindowStyle>
                <CloseButton onClick={handleCloseModal}>
                    <CloseIconStyled />
                </CloseButton>
                <>
                    <ModalTitle style={{ textTransform: 'uppercase' }}>Umów się na wizytę</ModalTitle>
                    <Text>Skontaktuj się z nami, aby umówić wizytę:</Text>

                    <ModalContent>
                        <Text><p><MdPhoneIphone />Zadzwoń do nas:</p><a href={`tel:${dataContakt.phoneToCall}`}>{dataContakt.phoneToShow}</a></Text>
                        <Text><p><MdOutlineEmail />Wyślij e-mail:</p> <a href={`mailto:${dataContakt.email}`}>{dataContakt.email}</a></Text>

                        <Text><p><FaLink />Znajdź nas na:</p></Text>
                        <NetworksWrapp>
                            <NetworksList />
                        </NetworksWrapp>
                        <Text style={{ marginBottom: '0' }}>Zapraszamy do kontaktu!</Text>
                    </ModalContent>
                </>
            </WindowStyle>
        </Backdrop>,
        document.querySelector('#modal-root')
    );
};

export default ModalWindow;
