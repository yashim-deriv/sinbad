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
import { ImageContainer } from 'common/components/containers'
import Table from 'common/components/containers/table'

type StyledTextProps = {
    font_family?: string
}

const OurTermsContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: flex-start;
    background-color: #fef5e6;
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
    padding: 30px 0 30px 150px;
`
const OurTermsTable = styled.div<StyledTextProps>`
    font-size: 38px;
    line-height: 53px;
    color: #232323;
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
`

const TermsAndSinbadContainer = styled.div`
    padding-top: 120px;
    display: flex;
`

const StyledSS = styled.div<StyledTextProps>`
    font-size: 38px;
    line-height: 61px;
    color: #f47c48;
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
`

const StyledHeader = styled.div<StyledTextProps>`
    max-width: 425px;
    font-size: 48px;
    line-height: 53px;
    color: #232323;
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
    padding: 10px 0 20px;
`

const StyledText = styled.div<StyledTextProps>`
    max-width: 350px;
    font-size: 16px;
    line-height: 27px;
    color: #232323;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: left;
    padding-bottom: 10px;
`

const StyledDescription = styled.div<StyledTextProps>`
    max-width: 480px;
    font-size: 24px;
    line-height: 33px;
    color: #f47c48;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
    padding-bottom: 320px;
`

const data = {
    first_column: [
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
    ],

    second_column: [
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
    ],
}

const OurTerms = () => {
    return (
        <OurTermsContainer>
            <TermsTextContainer>
                <StyledSS>Sinbad Software</StyledSS>
                <StyledHeader>Revolutionising fintech needs amazing software</StyledHeader>
                <StyledText>
                    Our mission is to develop world-class fintech software solutions taht will give
                    our clients a cutting edge.
                </StyledText>
                <StyledText>
                    With a deep undestanding of the fintech industry and a talented team, we are
                    ready to provide clients around the world with they need - from custom software
                    to mobile applications, websites, web applications, information architecture,
                    and more.
                </StyledText>
                <StyledDescription>
                    Where others see gaps, we see an opportunity to build a powerhouse
                </StyledDescription>
            </TermsTextContainer>
            <TermsAndSinbadContainer>
                <ImageContainer src={OurTermsSinbad} width="270px" height="700px" />,
                <OurTermsTable>
                    Our Terms
                    <Table data={data} />
                </OurTermsTable>
            </TermsAndSinbadContainer>
        </OurTermsContainer>
    )
}

export default OurTerms
