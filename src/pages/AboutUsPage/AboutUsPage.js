import React from 'react';
import AboutClinic from '../../components/AboutClinic/AboutClinic';
import DetailsSection from '../../components/AboutClinic/DetailsSection/DetailsSection';
import TeamSection from '../../components/AboutClinic/TeamSection/TeamSection';

const AboutUsPage = () => {
    return (
        <>
            <AboutClinic />
            <DetailsSection />
            <TeamSection />
        </>
    )
};

export default AboutUsPage;