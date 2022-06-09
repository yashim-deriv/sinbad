import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, ImageContainer } from 'components/containers'
import AnalyticBackground from 'images/common/jd/analytic-background.png'
import Background from 'images/common/background.png'
import { PositionsType } from 'pages/open-positions/open-positions'

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
    flex-direction: column;
    align-items: center;
`

const StyledHeader = styled.div<{ font_family?: string }>`
    max-width: 600px;
    font-size: 4.8rem;
    line-height: 58px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding-top: 100px;
`

type JobTitleProps = {
    position: PositionsType
}

const JobTitle = ({ position }: JobTitleProps) => {
    return (
        <JobTitleContainer>
            <JobTitleContainerWrapper>
                <StyledHeader>{position.position}</StyledHeader>
                <ImageContainer src={AnalyticBackground} max_height="unset" />
            </JobTitleContainerWrapper>
        </JobTitleContainer>
    )
}

export default JobTitle
