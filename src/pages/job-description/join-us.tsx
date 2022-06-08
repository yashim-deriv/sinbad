import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/containers/main'
import { ContainerWrapper } from 'components/containers'
import Joinus from 'images/common/jd/join-us.png'

const JoinUsContainer = styled.div`
    display: flex;
    background-color: var(--color-sand-1);
`

const JoinUsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
`

const StyledHeader = styled(Header)`
    text-transform: uppercase;
    color: var(--color-sand-4);
    padding-right: 40px;
`

const StyledText = styled.div<{ font_family?: string }>`
    max-width: 350px;
    font-size: 16px;
    line-height: 27px;
    color: #232323;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: left;
    padding-bottom: 10px;
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 240px;
`

const StyledSSHeader = styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
`

const StyledSSText = styled.div<{ font_family?: string }>`
    padding: unset;
    color: #f47c48;
    font-size: 33px;
    line-height: 62px;
    font-weight: 656;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    padding-right: 5px;
`

const JoinUs = () => {
    return (
        <JoinUsContainer>
            <JoinUsContainerWrapper>
                <img src={Joinus} />
                <JoinUsInfo>
                    <StyledSSHeader>
                        <StyledSSText font_family="Maven Pro Bold">Sinbad </StyledSSText>
                        <StyledSSText> Sowtfare</StyledSSText>
                    </StyledSSHeader>

                    <StyledHeader>Join our team!</StyledHeader>
                    <StyledText>
                        To apply for this position please send us your CV with a cover letter to
                        hr@sinbad.dev
                    </StyledText>
                </JoinUsInfo>
            </JoinUsContainerWrapper>
        </JoinUsContainer>
    )
}

export default JoinUs
