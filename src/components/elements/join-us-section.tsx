import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Button } from 'components/elements'
import { Header, JoinUsImageContainer, Text } from 'components/containers/main'
import { ContainerWrapper, HeaderTitle } from 'components/containers/common/style'
import { openPositionActions } from 'common/utility'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import device from 'themes/device'

const Wrapper = styled.div`
    display: flex;
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    justify-content: center;
    width: 100%;
    padding: 44px 0;
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
    padding-right: 15px;
`

const JoinUsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    @media ${device.tabletL} {
        display: flex;
        flex-direction: column;
        height: auto;
        justify-content: center;
        padding-top: 20px;
    }
`

const TextContainer = styled.div`
    padding-bottom: 190px;

    @media ${device.tabletL} {
        padding-bottom: 20px;
    }
`

type JoinUsSectionProps = {
    appearance?: 'home' | 'careers' | 'open_positions' | 'jobs'
}

const image_data = [
    {
        id: 'home',
        img: (
            <StaticImage
                src="../../images/common/homepage/join-us/home-join-us.png"
                alt="home join us image"
                placeholder="none"
            />
        ),
    },
    {
        id: 'careers',
        img: (
            <StaticImage
                src="../../images/common/careers/careers-join-us.png"
                alt="career join us image"
                placeholder="none"
            />
        ),
    },
    {
        id: 'open_positions',
        img: (
            <StaticImage
                src="../../images/common/openpositions/join-team.png"
                alt="open position join us image"
                placeholder="none"
            />
        ),
    },
    {
        id: 'jobs',
        img: (
            <StaticImage
                src="../../images/common/jd/job-join-us.png"
                alt="jobs join us image"
                placeholder="none"
            />
        ),
    },
]

const JoinUsSection = ({ appearance }: JoinUsSectionProps) => {
    return (
        <Wrapper>
            <ContainerWrapper>
                <JoinUsContainer>
                    <JoinUsInfo>
                        <StyledHeader>
                            <HeaderTitle
                                color="var(--color-sand-4)"
                                font_family="Maven Pro Bold"
                                padding_right="10px"
                            >
                                Sinbad
                            </HeaderTitle>
                            <HeaderTitle color="var(--color-sand-4)">Software</HeaderTitle>
                        </StyledHeader>
                        <TextContainer>
                            <Header font_size="28px" text_transform="uppercase">
                                Join Our Team!
                            </Header>
                            <Text padding="20px 0">
                                Is your dream to build great products using leading technologies?
                                Join Sinbad Software, where creativity, talent, and a passion for
                                challenges come together
                            </Text>
                            <Button label="See Our Open Positions" onClick={openPositionActions} />
                        </TextContainer>
                    </JoinUsInfo>
                    <JoinUsImageContainer>
                        {image_data.find((img) => img.id === appearance)?.img}
                    </JoinUsImageContainer>
                </JoinUsContainer>
            </ContainerWrapper>
        </Wrapper>
    )
}

export default JoinUsSection
