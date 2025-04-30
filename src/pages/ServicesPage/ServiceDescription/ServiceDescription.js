import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getServiceById } from "../../../utils/servicesHelpers";
import AboutServices from '../../../components/ServicesDescription/AboutServices/AboutServices';
import Description from '../../../components/ServicesDescription/Description/Description';
import { ButtonsBox, ButtonTypeStyled, LinkStyled } from './ServiceDescription.styled';
import { ButtonStyled } from '../../../components/ButtonLink/ButtonLink.styled';
import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import NotFoundPage from '../../NotFoundPage/NotFoundPage'


const ServiceDescription = () => {

    const { id } = useParams();
    const service = getServiceById(id);
    const [isShowModal, setIsShowModal] = useState(false);

    const handleButton = () => setIsShowModal(!isShowModal);

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsShowModal(false);
        }
    };
    useEffect(() => {
        if (isShowModal) {
            window.addEventListener('keydown', handleKeyDown);
        } else { window.removeEventListener('keydown', handleKeyDown); }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isShowModal]);

    return (
        <><div id="back-to-top-anchor"></div>
            {service ? (
                <><AboutServices service={service} />
                    <Description service={service}>
                        <ButtonsBox>
                            <LinkStyled><ButtonStyled to='/pytania-i-odpowiedzi'>Najczęściej zadawane pytania</ButtonStyled></LinkStyled>
                            <ButtonTypeStyled onClick={handleButton}>UMÓW SIĘ</ButtonTypeStyled>
                        </ButtonsBox>
                        {isShowModal && <ModalWindow toggleShowMenu={handleButton} />}
                    </Description></>
            ) : (
                <NotFoundPage />
            )}
        </>
    )
};

export default ServiceDescription;