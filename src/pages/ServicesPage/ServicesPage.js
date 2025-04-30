import React, { useState } from 'react';
import { Container } from '@mui/material';
import { servicesList, servicesNextList } from '../../utils/servicesList';
import { ListStyled, ItemStyled, Section, Wrapper } from './ServicesPage.styled';
import CatalogListItem from '../../components/CatalogSection/CatalogListItem/CatalogListItem';
import CatalogList from '../../components/CatalogSection/CatalogList/CatalogList';
import { Title } from '../../components/CatalogSection/Catalog.styled';


const ServicesPage = () => {

    const filterArray = ['Twarz', 'Ciało', 'Medycyna estetyczna', 'Konsultacje kosmetologiczne', 'Wszystkie']
    const servicesArray = [...servicesList, ...servicesNextList];
    const [filteredArray, setFilteredArray] = useState(servicesArray);

    const handleClick = (newValue) => {
        switch (newValue) {
            case 'Twarz':
                setFilteredArray(servicesArray.filter(item => item.type === 'Twarz'));
                break;
            case 'Ciało':
                setFilteredArray(servicesArray.filter(item => item.type === 'Ciało'));
                break;
            case 'Medycyna estetyczna':
                setFilteredArray(servicesArray.filter(item => item.type === 'Medycyna estetyczna'));
                break;
            case 'Konsultacje kosmetologiczne':
                setFilteredArray(servicesArray.filter(item => item.type === 'Konsultacje kosmetologiczne'));
                break;
            case 'Wszystkie':
                setFilteredArray(servicesArray);
                break;
            default:
                setFilteredArray(servicesArray);
        }
    };

    return (
        <>
            <Section>
                <Container>
                    <div id="back-to-top-anchor"></div>
                    <Title>Nasze zabiegi</Title>
                    <ListStyled>
                        {filterArray.map((item, index) => (
                            <ItemStyled key={index} onClick={() => handleClick(item)}>{item}</ItemStyled>
                        )
                        )}
                    </ListStyled>
                </Container>
                <Wrapper>
                    <Container>
                        <CatalogList>
                            <CatalogListItem array={filteredArray} />
                        </CatalogList>
                    </Container>
                </Wrapper>
            </Section>
        </>
    )
};

export default ServicesPage;