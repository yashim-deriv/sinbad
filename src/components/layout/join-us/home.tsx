import React from 'react'
import styled from 'styled-components'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { Button } from 'components/elements'
import { Header, JoinUsImageContainer, Text } from 'components/containers/main'
import Sinbad0 from 'images/common/homepage/join-us/home-join-us.png'
import { HeaderTitle, ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'
import { openPositionActions } from 'common/utility'

const Wrapper = styled.div`
    display: flex;
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    justify-content: center;
    width: 100%;
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
    padding-right: 15px;
`

export const JoinUsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 600px;

    @media ${device.tabletL} {
        display: flex;
        flex-direction: column;
        height: auto;
        justify-content: center;
        padding-top: 20px;
    }
`
export const TextContainer = styled.div`
    padding-bottom: 190px;

    @media ${device.tabletL} {
        padding-bottom: 20px;
    }
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const JoinUsHome = () => {
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

                    <JoinUsImageContainer src={Sinbad0} />
                </JoinUsContainer>
            </ContainerWrapper>
        </Wrapper>
    )
}

export default JoinUsHome
