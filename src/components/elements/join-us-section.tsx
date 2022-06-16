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
        home: (
            <StaticImage
                src="../../images/common/homepage/join-us/home-join-us.png"
                alt="join us"
            />
        ),
    },
    {
        careers: (
            <StaticImage
                src="../../images/common/homepage/join-us/careers-join-us.png"
                alt="join us"
            />
        ),
    },
    {
        open_positions: (
            <StaticImage
                src="../../images/common/homepage/join-us/join-team.png"
                alt="join our team"
            />
        ),
    },
    {
        jobs: (
            <StaticImage src="../../images/common/homepage/join-us/job-join-us.png" alt="join us" />
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
                    <JoinUsImageContainer>{image_data[appearance]}</JoinUsImageContainer>
                </JoinUsContainer>
            </ContainerWrapper>
        </Wrapper>
    )
}

export default JoinUsSection
