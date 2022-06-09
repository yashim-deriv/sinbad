import React from 'react'
import styled from 'styled-components'
import { Header, ImageContainer, Text } from 'components/containers'
import Dashboard from 'images/common/dashboard.png'
import Sinbad0 from 'images/common/careers/sinbad-0.png'
import Words from 'images/common/careers/word.png'
import device from 'themes/device'
import Background from 'images/common/background.png'
import { ContainerWrapper } from 'components/containers/common/style'

/* stylelint-disable */

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;

    @media ${device.mobileL} {
        background-image: none;
    }
`

const WorkWithUsWrapper = styled(ContainerWrapper)`
    flex-direction: column;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`

const WorkWithUsHeader = styled(Header)`
    @media ${device.mobileL} {
        padding: 0px;
    }
`

const Images = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledHeader = styled(Header)`
    text-transform: uppercase;
    justify-content: center;
    padding: 10px;
`

const WhyWithUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
`

const WhyWithUsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
`

const WhyWithUsParag = styled(Text)`
    max-width: 900px;
    width: 100%;
`

const WordsImageContainer = styled(ImageContainer)`
    width: 100%;
    max-width: 700px;
    object-fit: scale-down;
`

const BannerImages = styled(ImageContainer)`
    object-fit: scale-down;
    max-height: 400px;

    @media ${device.mobileL} {
        display: none;
    }
`

const WorkWithUs = () => {
    return (
        <>
            <BannerContainer>
                <WorkWithUsWrapper>
                    <HeaderContainer>
                        <WorkWithUsHeader
                            padding="2px 0"
                            font_weight="normal"
                            color="var(--color-sand-4)"
                            font_size="3.6rem"
                            line_height="36px"
                        >
                            Work with talented teams.
                        </WorkWithUsHeader>
                        <WorkWithUsHeader
                            padding="2px 0 2px 115px"
                            font_weight="normal"
                            font_size="3.6rem"
                            line_height="36px"
                        >
                            with the latest tech stack.
                        </WorkWithUsHeader>
                        <WorkWithUsHeader
                            padding="2px 0 2px 95px"
                            font_weight="normal"
                            color="var(--color-sand-4)"
                            font_size="3.6rem"
                            line_height="36px"
                        >
                            on challenging projects.
                        </WorkWithUsHeader>
                    </HeaderContainer>
                    <Images>
                        <BannerImages src={Dashboard} />
                        <BannerImages src={Sinbad0} />
                    </Images>
                </WorkWithUsWrapper>
            </BannerContainer>

            <WhyWithUsContainer>
                <ContainerWrapper>
                    <WhyWithUsText>
                        <StyledHeader>Why work at sinbad software?</StyledHeader>
                        <WhyWithUsParag text_align="center">
                            Fintech is an industry where projects come in many shapes and sizes. You
                            will be constantly challenged to come up with new solutions and work
                            with various technologies.WIth us, you will have the opportunity to
                            continuosily learn and build your skills while working on new challenges
                            with a smart, supportive team.
                        </WhyWithUsParag>
                    </WhyWithUsText>
                </ContainerWrapper>
                <ContainerWrapper>
                    <WordsImageContainer src={Words} />
                </ContainerWrapper>
            </WhyWithUsContainer>
        </>
    )
}

export default WorkWithUs
