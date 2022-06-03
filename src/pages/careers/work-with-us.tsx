import React from 'react'
import styled from 'styled-components'
import { Header, ImageContainer, Text } from 'common/components/containers'
import Dashboard from 'images/common/dashboard.png'
import Sinbad0 from 'images/common/careers/sinbad-0.png'
import Words from 'images/common/careers/word.png'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`
const Images = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledHeader = styled(Header)`
    text-transform: uppercase;
`

const WhyWithUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
`

const WhyWithUsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`

const WorkWithUs = () => {
    return (
        <>
            <HeaderContainer>
                <Header padding="2px 0" font_weight="normal" color="red">
                    Work with talented teams.
                </Header>
                <Header padding="2px 0 2px 115px" font_weight="normal">
                    with the latest tech stack.
                </Header>
                <Header padding="2px 0 2px 95px" font_weight="normal" color="red">
                    on challenging projects.
                </Header>
            </HeaderContainer>
            <Images>
                <ImageContainer src={Dashboard} />
                <ImageContainer src={Sinbad0} />
            </Images>
            <WhyWithUsContainer>
                <WhyWithUsText>
                    <StyledHeader>Why work at sinbad software?</StyledHeader>
                    <Text text_align="center" width="900px">
                        Fintech is an industry where projects come in many shapes and sizes. You
                        will be constantly challenged to come up with new solutions and work with
                        various technologies.WIth us, you will have the opportunity to continuosily
                        learn and build your skills while working on new challenges with a smart,
                        supportive team.
                    </Text>
                </WhyWithUsText>
                <ImageContainer src={Words} />
            </WhyWithUsContainer>
        </>
    )
}

export default WorkWithUs
