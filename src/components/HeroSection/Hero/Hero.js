import dataInfo from "../../../utils/aboutInfo"
import Container from "../../Container/Container";
import { useMediaQuery } from 'react-responsive';
import { Wrapper, WrappMob, ButtonStyled, Section, BackBox } from "./Hero.styled";
import InfoCard from "../../InfoCard/InfoCard";
import { useEffect, useState } from 'react';
import ModalWindow from '../../ModalWindow/ModalWindow';
import ContactList from '../../ContactList/ContactList';
import HeroTitle from "../HeroTitle/HeroTitle";

const Hero = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const { title, services, supTitle, subTitle, signature, buttonHero } = dataInfo.heroInfo;

    const handleButton = () => setIsShowModal(!isShowModal);

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsShowModal(false);
        }
    };
    useEffect(() => {
        if (isShowModal) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isShowModal]);

    return (
        <Section id="back-to-top-anchor">
            <BackBox />
            <Container>
                <Wrapper>
                    {isDesktopOrTablet && (
                        <InfoCard>
                            <div>
                                <HeroTitle HeroTitle > {title} </HeroTitle>
                            </div>
                            <div>
                                <ContactList />
                            </div>
                            <ButtonStyled onClick={handleButton}> {buttonHero} </ButtonStyled>
                        </InfoCard>
                    )}
                    {isMobile && (
                        <>
                            <HeroTitle> {title} </HeroTitle>
                            <WrappMob>
                                <ContactList />
                            </WrappMob>
                            <ButtonStyled onClick={handleButton}> {buttonHero} </ButtonStyled>
                        </>
                    )}
                    {isShowModal && <ModalWindow toggleShowMenu={handleButton} />}
                </Wrapper>
            </Container>
        </Section>
    )
};

export default Hero;