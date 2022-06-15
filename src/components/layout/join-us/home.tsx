import React from 'react'
import styled from 'styled-components'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { Button } from 'components/elements'
import { JoinUsImageContainer } from 'components/containers/main'
import Sinbad0 from 'images/common/homepage/join-us/home-join-us.png'
import { ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'
import { openPositionActions } from 'common/utility'
import { SectionLabel } from 'components/chunks'

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

export const StyledHeader = styled.div<{ font_family?: string }>`
    text-transform: uppercase;
    color: var(--color-black-3);
    font-size: 4.8rem;
    line-height: 58px;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
`

export const StyledText = styled.div<{ font_family?: string }>`
    max-width: 380px;
    width: 100%;
    font-size: 1.9rem;
    line-height: 34px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: left;
    padding: 25px 0;
`

export const JoinUsContainer = styled.div<{ fd?: string; height?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: ${(props) => props.height || '760px'};

    @media ${device.tabletL} {
        display: flex;
        flex-direction: ${(props) => props.fd || 'column-reverse'};
        height: auto;
        justify-content: center;
        padding: 30px 0;
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
    justify-content: center;
`

const JoinUsHome = () => {
    return (
        <Wrapper>
            <ContainerWrapper>
                <JoinUsContainer>
                    <JoinUsInfo>
                        <SectionLabel />
                        <TextContainer>
                            <StyledHeader>Join Our Team!</StyledHeader>
                            <StyledText>
                                Is your dream to build great products using leading technologies?
                                Join Sinbad Software, where creativity, talent, and a passion for
                                challenges come together.
                            </StyledText>
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
