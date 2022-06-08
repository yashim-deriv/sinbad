import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, Header, ImageContainer } from 'components/containers'
import AnalyticBackground from 'images/common/jd/analytic-background.png'
import Background from 'images/common//background.png'

const JobTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;
`

const JobTitleContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
`

const StyledHeader = styled(Header)`
    text-transform: uppercase;
`

const JobTitle = () => {
    return (
        <JobTitleContainer>
            <JobTitleContainerWrapper>
                <StyledHeader padding="40px 0">Front-end developer</StyledHeader>
                <ImageContainer src={AnalyticBackground} />
            </JobTitleContainerWrapper>
        </JobTitleContainer>
    )
}

export default JobTitle
