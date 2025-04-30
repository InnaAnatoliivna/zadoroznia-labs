import React, { useState } from 'react';
import { Section } from './FAQPage.styled';
import AccordionComponent from '../../components/FAQ/Accordion/Accordion';
import FilterSection from '../../components/FAQ/FilterSection/FilterSection';
import dataQA from '../../resources/QuestionAnswer.json';
import { ItemStyled } from '../ServicesPage/ServicesPage.styled';

const arrayFilter = ["Endermologia LPG", "Oczyszczenie wodorowe", "Epilacja laserowa", "Wszystkie"];

const FAQPage = () => {

    const [filteredArray, setFilteredArray] = useState(dataQA);

    const handleClick = (newValue) => {
        switch (newValue) {
            case "Endermologia LPG":
                setFilteredArray(dataQA.filter(item => item.theme === "Endermologia LPG"));
                break;
            case "Oczyszczenie wodorowe":
                setFilteredArray(dataQA.filter(item => item.theme === "Oczyszczenie wodorowe"));
                break;
            case "Epilacja laserowa":
                setFilteredArray(dataQA.filter(item => item.theme === "Epilacja laserowa"));
                break;
            case "Wszystkie":
                setFilteredArray(dataQA); // Show all items
                break;
            default:
                setFilteredArray(dataQA);
        }
    };


    return (
        <Section>
            <FilterSection>
                {arrayFilter.map((item, index) => (
                    <ItemStyled key={index} onClick={() => handleClick(item)}>
                        <p>{item}</p>
                    </ItemStyled>
                ))}
            </FilterSection>
            <AccordionComponent question={filteredArray} />
        </Section>
    )
};

export default FAQPage;