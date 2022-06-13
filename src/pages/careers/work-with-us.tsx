import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, ImageContainer } from 'components/containers'
import { Background, WorkWithUsDashboard } from 'images/common/careers'
import device from 'themes/device'

const WorkWithUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;
    max-height: 790px;

    @media ${device.mobileL} {
        background-image: none;
    }
`

const CareersContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        align-items: center;
    }
`
const StyledHeader = styled.div<{ font_family?: string; color?: string; padding?: string }>`
    display: flex;
    font-size: 4.8rem;
    line-height: 57px;
    color: ${(props) => props.color || '#2a2a2a'};
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: center;
    padding: ${(props) => props.padding || 'unset'}; ;
`

const WorkWithUs = () => {
    return (
        <WorkWithUsContainer>
            <CareersContainerWrapper>
                <StyledHeader color="var(--color-sand-4)" padding="2px 0">
                    Work <StyledHeader padding="0 10px">with talented teams.</StyledHeader>
                </StyledHeader>

                <StyledHeader padding="2px 0 2px 250px">with the latest tech stack.</StyledHeader>
                <StyledHeader padding="2px 0 2px 200px" color="var(--color-sand-4)">
                    on challenging projects.
                </StyledHeader>

                <ImageContainer src={WorkWithUsDashboard} max_height="unset" />
            </CareersContainerWrapper>
        </WorkWithUsContainer>
    )
}

export default WorkWithUs
