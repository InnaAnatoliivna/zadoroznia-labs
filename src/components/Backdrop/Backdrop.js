import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from './Backdrop.styled';

const Backdrop = ({ closeModal, children }) => {
    const modalRoot = useRef(document.querySelector('#modal-root'));

    useEffect(() => {
        const handleKeyDown = (evt) => {
            if (evt.code === 'Escape' && closeModal) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return createPortal(
        <ModalOverlay
            onClick={(e) => {
                if (e.target === e.currentTarget && closeModal) {
                    closeModal();
                }
            }}
        >
            {children}
        </ModalOverlay>,
        modalRoot.current
    );
};

export default Backdrop;
