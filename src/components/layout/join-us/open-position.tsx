import React from 'react'
import styled from 'styled-components'
import { JoinUsContainer, StyledHeader, StyledText, TextContainer } from './home'
import { JoinUsImageContainer } from 'components/containers/main'
import Sinbad0 from 'images/common/openpositions/join-team.png'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { ContainerWrapper } from 'components/containers/common/style'
import { SectionLabel } from 'components/chunks'
import { Banner } from 'images/common/jd'

const Wrapper = styled.div`
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    width: 100%;
`

const JoinUsWrapper = styled(JoinUsContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: url(${Banner});
    background-size: 47.5% 65%;
    width: 100%;
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const JoinUsOpenPositions = () => {
    return (
        <Wrapper>
            <JoinUsWrapper>
                <ContainerWrapper>
                    <JoinUsInfo>
                        <SectionLabel />
                        <TextContainer>
                            <StyledHeader>JOIN OUR TEAM!</StyledHeader>
                            <StyledText>
                                Is your dream to build great products using leading technologies?
                                Join Sinbad Software, where creativity, talent, and a passion for
                                challenges come together.
                            </StyledText>
                        </TextContainer>
                    </JoinUsInfo>
                    <JoinUsImageContainer src={Sinbad0} />
                </ContainerWrapper>
            </JoinUsWrapper>
        </Wrapper>
    )
}

export default JoinUsOpenPositions
