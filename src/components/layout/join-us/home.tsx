import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { Button } from 'components/elements'
import { JoinUsImageContainer } from 'components/containers/main'
import device from 'themes/device'
import { openPositionActions } from 'common/utility'
import { SectionLabel } from 'components/chunks'
import { Banner } from 'images/common/careers'

const Wrapper = styled.div`
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
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
    max-width: 432px;
    width: 100%;
    font-size: 2.1rem;
    line-height: 34px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
    padding: 25px 0;
`

export const JoinUsContainer = styled.div<{ fd?: string; height?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: ${(props) => props.height || '700px'};

    @media ${device.tabletL} {
        display: flex;
        flex-direction: ${(props) => props.fd || 'column'};
        height: auto;
        justify-content: center;
    }
`
export const TextContainer = styled.div<{ padding_bottom?: string }>`
    padding-bottom: ${(props) => props.padding_bottom || '190px'};

    @media ${device.tabletL} {
        padding-bottom: 20px;
    }
`

const JoinUsWrapper = styled(JoinUsContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 42% 70%;
    width: 100%;
`

export const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    @media ${device.tabletL} {
        padding-top: 40px;
    }
`

const JoinUsHome = () => {
    return (
        <Wrapper>
            <JoinUsWrapper>
                <JoinUsContainer>
                    <JoinUsInfo>
                        <SectionLabel />
                        <TextContainer padding_bottom="80px">
                            <StyledHeader>Join Our Team!</StyledHeader>
                            <StyledText>
                                Is your dream to build great products using leading technologies?
                                Join Sinbad Software, where creativity, talent, and a passion for
                                challenges come together.
                            </StyledText>
                            <Button label="See Our Open Positions" onClick={openPositionActions} />
                        </TextContainer>
                    </JoinUsInfo>
                    <JoinUsImageContainer padding_bottom="unset">
                        <StaticImage
                            src="../../../images/common/homepage/join-us/home-join-us.png"
                            alt="home join us image"
                            placeholder="none"
                        />
                    </JoinUsImageContainer>
                </JoinUsContainer>
            </JoinUsWrapper>
        </Wrapper>
    )
}

export default JoinUsHome
