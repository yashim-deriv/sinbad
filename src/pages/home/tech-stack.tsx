import React from 'react'
import styled from 'styled-components'
import Dashboard from 'images/common/dashboard.png'
import { ContainerWrapper } from 'components/containers'

type StyledTextProps = {
    font_family?: string
}

const TechStackContainerWrapper = styled(ContainerWrapper)`
    padding: 100px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: var(--color-white);
`

const TechDashboard = styled.img`
    max-width: 800px;
    max-height: 600px;
`

const TermsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    text-align: center;
    align-items: flex-start;
    margin: 30px 15px;
`

const tech_stack = [
    '>  CSS',
    '>  Perl',
    '>  React',
    '>  Sass',
    '>  JavaScript',
    '>  InDesign',
    '>  PostgreSQL',
    '>  Redis',
    '>  Amazon Web Services',
    '>  GitHub',
    '>  Redmine',
    '>  Wikimedia Commons',
]

const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: 500px;
    max-height: 170px;
    padding: 20px 0;
`

const Stack = styled.div<StyledTextProps>`
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 320;
    padding: 15px 25px 0 0;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
`
const StyledSSHeader = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledSSText = styled.div<StyledTextProps>`
    padding: unset;
    color: var(--color-sand-4);
    font-size: 3.3rem;
    line-height: 62px;
    font-weight: 656;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    padding-right: 5px;
`
const StyledText = styled.div<StyledTextProps>`
    max-width: 350px;
    font-size: 1.6rem;
    line-height: 27px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: left;
`
const StyledHeader = styled.div<StyledTextProps>`
    max-width: 425px;
    font-size: 4.8rem;
    line-height: 51px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding: 10px 0 20px;
`

const StyledDescription = styled.div<StyledTextProps>`
    max-width: 480px;
    font-size: 2.4rem;
    line-height: 27px;
    color: var(--color-sand-4);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding-bottom: 120px;
`

const TechStack = () => {
    return (
        <TechStackContainerWrapper>
            <TechDashboard src={Dashboard} />
            <TermsTextContainer>
                <StyledSSHeader>
                    <StyledSSText font_family="Maven Pro Bold">Sinbad </StyledSSText>
                    <StyledSSText>Sowtfare</StyledSSText>
                </StyledSSHeader>
                <StyledHeader>Tech stack</StyledHeader>
                <StyledText>
                    We leverage a wide range of programming languages and frameworks to create robus
                    software for the fintech industry to meet our clients needs.
                </StyledText>
                <StackContainer>
                    {tech_stack.map((item, index) => (
                        <Stack key={index}>{item}</Stack>
                    ))}
                </StackContainer>
                <StyledDescription>and more...</StyledDescription>
            </TermsTextContainer>
        </TechStackContainerWrapper>
    )
}

export default TechStack
