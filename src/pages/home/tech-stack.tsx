import React from 'react'
import styled from 'styled-components'
import Dashboard from 'images/common/dashboard.png'
import { Header, Text } from 'common/components/containers'

const TechStackContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--color-blue-2);
`

const TechDashboard = styled.img`
    width: 600px;
    height: 400px;
    padding: 0 40px;
`

const TechStackInfo = styled.div`
    width: 400px;
`

const TermsTextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 200px;
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
    width: 500px;
    height: 170px;
    padding: 20px 0;
`

const Stack = styled.div`
    flex-direction: column;
    font-size: 16px;
    padding: 15px 25px 0 0;
`

const TechStack = () => {
    return (
        <TechStackContainer>
            <TechDashboard src={Dashboard} />
            <TechStackInfo>
                <TermsTextContainer>
                    <Header color="red">Sinbad Software</Header>
                    <Header font_size="28px">Tech stack</Header>
                    <Text>
                        We leverage a wide range of programming languages and frameworks to create
                        robus software for the fintech industry to meet our clients needs.
                    </Text>
                    <StackContainer>
                        {tech_stack.map((item, index) => (
                            <Stack key={index}>{item}</Stack>
                        ))}
                    </StackContainer>
                    <Header color="red" font_size="18px" font_weight="normal">
                        and more...
                    </Header>
                </TermsTextContainer>
            </TechStackInfo>
        </TechStackContainer>
    )
}

export default TechStack
