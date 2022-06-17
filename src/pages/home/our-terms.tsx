import React from 'react'
import styled from 'styled-components'
import {
    Term0,
    Term1,
    Term2,
    Term3,
    Term4,
    Term5,
    Term6,
    Term7,
    OurTermsSinbad,
    OurTermsBackground,
} from 'images/common/homepage/our-terms'
import { ImageContainer } from 'components/containers'
import Table, { TableType } from 'components/containers/table'
import { SectionLabel } from 'components/chunks'
import { ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'

type StyledTextProps = {
    font_family?: string
}

/* stylelint-disable */

const OurTermsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: flex-start;

    @media ${device.bp1060} {
        justify-content: center;
        padding-bottom: 200px;
    }
    @media ${device.laptopM} {
        display: flex;
    }
    @media (max-width: 620px) {
        flex-direction: column;
        align-items: center;
    }
`

const OurTermsContainer = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-sand-1);
    background-image: url(${OurTermsBackground});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;
`

const TermsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    padding: 30px 0;

    @media ${device.tabletS} {
        flex-wrap: wrap;
        align-content: center;
    }
`

const TermsAndSinbadContainer = styled.div`
    padding: 80px 0 0;
    display: flex;

    @media ${device.tablet} {
        justify-content: center;
        padding: 0 0 30px;
    }
`

const StyledHeader = styled.div<StyledTextProps>`
    max-width: 520px;
    font-size: 4.8rem;
    line-height: 53px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding: 10px 0 20px;

    @media ${device.laptopM} {
        max-width: 320px;
        font-size: 4.4rem;
        line-height: 48px;
    }
`

const StyledText = styled.div<StyledTextProps>`
    max-width: 350px;
    font-size: 1.6rem;
    line-height: 27px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
    padding-bottom: 10px;

    @media ${device.laptopM} {
        max-width: 320px;
        font-size: 1.5rem;
        line-height: 25px;
    }
`

const StyledDescription = styled.div<StyledTextProps>`
    max-width: 480px;
    font-size: 2.4rem;
    line-height: 33px;
    color: var(--color-sand-4);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding-bottom: 190px;

    @media ${device.laptopM} {
        max-width: 320px;
        font-size: 2.2rem;
        line-height: 30px;
        padding-bottom: 0px;
    }
`

const SinbadImage = styled(ImageContainer)`
    max-width: 200px;
    object-fit: scale-down;

    @media ${device.tabletL} {
        display: none;
    }
`

const data: TableType[] = [
    {
        icon: Term0,
        text: 'Mobile App development',
    },
    {
        icon: Term1,
        text: 'Full-stack Development',
    },
    {
        icon: Term2,
        text: 'UI/UX',
    },
    {
        icon: Term3,
        text: 'Business Intelligence',
    },
    {
        icon: Term4,
        text: 'Quantitative Analysis',
    },
    {
        icon: Term5,
        text: 'Data Science',
    },
    {
        icon: Term6,
        text: 'DevOps',
    },
    {
        icon: Term7,
        text: 'Quality Assurance',
    },
]

const OurTerms = () => {
    return (
        <OurTermsContainer>
            <OurTermsContainerWrapper>
                <TermsTextContainer>
                    <SectionLabel />
                    <StyledHeader>Revolutionising fintech needs amazing software</StyledHeader>
                    <StyledText>
                        Our mission is to develop world-class fintech software solutions taht will
                        give our clients a cutting edge.
                    </StyledText>
                    <StyledText>
                        With a deep undestanding of the fintech industry and a talented team, we are
                        ready to provide clients around the world with they need - from custom
                        software to mobile applications, websites, web applications, information
                        architecture, and more.
                    </StyledText>
                    <StyledDescription>
                        Where others see gaps, we see an opportunity to build a powerhouse.
                    </StyledDescription>
                </TermsTextContainer>
                <TermsAndSinbadContainer>
                    <SinbadImage src={OurTermsSinbad} />,
                    <Table data={data} text={'Our Terms'} />
                </TermsAndSinbadContainer>
            </OurTermsContainerWrapper>
        </OurTermsContainer>
    )
}

export default OurTerms
