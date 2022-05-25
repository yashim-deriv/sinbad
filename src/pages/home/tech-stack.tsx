import React from 'react'
import styled from 'styled-components'
import Dashboard from 'images/common/dashboard.png'
import { HeaderText, CommonText } from 'common/components/containers/common'

const TechStackContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #3bc8f7;
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
                    <HeaderText color="red">Sinbad Software</HeaderText>
                    <HeaderText font_size="28px">Tech stack</HeaderText>
                    <CommonText>
                        We leverage a wide range of programming languages and frameworks to create
                        robus software for the fintech industry to meet our clients needs.
                    </CommonText>
                    <StackContainer>
                        {tech_stack.map((item, index) => (
                            <Stack key={index}>{item}</Stack>
                        ))}
                    </StackContainer>
                    <HeaderText color="red" font_size="18px" font_weight="normal">
                        and more...
                    </HeaderText>
                </TermsTextContainer>
            </TechStackInfo>
        </TechStackContainer>
    )
}

export default TechStack
