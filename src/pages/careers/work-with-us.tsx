import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ContainerWrapper, ImageContainer } from 'components/containers'
import { Background } from 'images/common/careers'
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
    padding: ${(props) => props.padding || '2px 0'};

    @media ${device.tabletL} {
        font-size: 3rem;
        line-height: 20px;
    }
    @media ${device.tabletS} {
        font-size: 2.4rem;
    }
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    padding: 2px 0 2px 252px;

    @media ${device.tabletL} {
        padding: 2px 0 2px 130px;
    }

    @media ${device.tabletS} {
        padding: 0 10px;
    }
`

const WorkWithUs = () => {
    return (
        <WorkWithUsContainer>
            <CareersContainerWrapper>
                <StyledHeader color="var(--color-sand-4)">
                    Work <StyledHeader padding="0 10px">with talented teams.</StyledHeader>
                </StyledHeader>
                <StyledContainer>
                    <StyledHeader>with the latest tech stack.</StyledHeader>
                    <StyledHeader color="var(--color-sand-4)">
                        on challenging projects.
                    </StyledHeader>
                </StyledContainer>
                <ImageContainer max_height="unset">
                    <StaticImage
                        src="../../images/common/careers/work-with-us.png"
                        alt="work with us"
                        placeholder="none"
                        loading="eager"
                    />
                </ImageContainer>
            </CareersContainerWrapper>
        </WorkWithUsContainer>
    )
}

export default WorkWithUs
