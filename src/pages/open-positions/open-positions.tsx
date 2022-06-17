import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ImageContainer, Header, Text } from 'components/containers/main'
import { ContainerWrapper } from 'components/containers/common/style'
import Background from 'images/common/homepage/carousel/background.png'
import RightArrow from 'images/common/openpositions/arrow.png'
import Flex from 'components/containers/flex'
import device from 'themes/device'
import { positions } from 'pages/job-description/data'

type CardProps = {
    index?: number
}

/* stylelint-disable */

const ContainersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-position: bottom center;
    background-size: contain;
    justify-content: center;
    background-repeat: no-repeat;
    width: 100%;
`

const HeroWrapper = styled(ContainerWrapper)``

const PositionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;

    @media ${device.laptopM} {
        flex-direction: column;
    }
`
const OpenPositionImage = styled(ImageContainer)`
    display: flex;
    flex-direction: row;
    padding: 50px 0;
    object-fit: contain;
    max-width: 700px;
    max-height: none;

    @media ${device.tabletL} {
        padding: 50px 0 0;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 140px;

    @media ${device.laptopM} {
        margin-top: 100px;
        margin-bottom: 0px;
        align-items: center;
    }
`

const StyledHeader = styled(Header)`
    width: 100px;
`

const StyledText = styled(Text)`
    padding: ${(props) => props.padding || '5px 0'};
    text-transform: uppercase;
    font-family: 'Maven Pro Bold';
`

const PositionsCarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
    align-items: center;
    padding-right: 60px;

    @media ${device.tablet} {
        padding-top: 20px;
        padding-right: 0;
    }
`

const Card = styled(Flex)<CardProps>`
    display: flex;
    max-width: 324px;
    height: 290px;
    padding: 30px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: white;
    margin: 20px;
    border-radius: 8px;
    justify-content: space-between;

    @media (max-width: 1200px) {
        order: ${(props) => (props.index === 2 ? 1 : props.index === 1 ? 2 : props.index)};
        margin: 0 0 19px;
    }
`
const CardButtonContainer = styled(Link)`
    display: flex;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: var(--color-blue-3);
    padding: 5px;
`
const CardButton = styled.img`
    width: 10px;
    height: 10px;
`
const LinkContainer = styled(Link)`
    display: flex;
`

const StyledFlex = styled(Flex)`
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`

const OpenPositionsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`

const OpenPositionsInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    align-self: start;
    left: 30px;
    top: 10px;

    @media ${device.tablet} {
        display: none;
    }
`

const OpenPositions = () => {
    return (
        <>
            <ContainersWrapper>
                <HeroWrapper>
                    <PositionsHeader>
                        <HeaderContainer>
                            <Header
                                padding="20px 0px 20px 0px"
                                font_size="5rem"
                                text_transform="uppercase"
                                line_height="42px"
                            >
                                It Careers For
                            </Header>
                            <Header
                                padding="20px 0px"
                                font_size="5rem"
                                color="var(--color-sand-4)"
                                text_transform="uppercase"
                                line_height="42px"
                            >
                                Challenge
                            </Header>
                            <Header
                                padding="20px 0px 20px 0px"
                                font_size="50px"
                                text_transform="uppercase"
                            >
                                Seekers
                            </Header>
                        </HeaderContainer>
                        <OpenPositionImage>
                            <StaticImage
                                src="../../images/common/openpositions/first-section.png"
                                alt=""
                                placeholder="none"
                            />
                        </OpenPositionImage>
                    </PositionsHeader>
                </HeroWrapper>
            </ContainersWrapper>
            <OpenPositionsContainer>
                <ContainerWrapper>
                    <PositionsCarouselContainer>
                        <StyledFlex width="760px" wrap="wrap">
                            {positions.map(({ position, text, id }, index) => {
                                return (
                                    <Card
                                        key={index}
                                        index={index}
                                        direction="column"
                                        ai="center"
                                        jc="start"
                                    >
                                        <Header
                                            color="var(--color-sand-4)"
                                            text_align="center"
                                            line_height="24px"
                                            padding="10px 0px"
                                        >
                                            {position}
                                        </Header>
                                        <Text font_size="14px" text_align="center">
                                            {text}
                                        </Text>
                                        <LinkContainer to={`/job-description/${id}`}>
                                            <Text
                                                font_size="11px"
                                                text_align="center"
                                                width="50px"
                                                padding="0px"
                                                font_family="Maven Pro Bold"
                                                text_transform="uppercase"
                                            >
                                                More
                                            </Text>
                                            <CardButtonContainer to="/some-postition">
                                                <CardButton src={RightArrow} />
                                            </CardButtonContainer>
                                        </LinkContainer>
                                    </Card>
                                )
                            })}
                        </StyledFlex>
                    </PositionsCarouselContainer>
                    <OpenPositionsInfo>
                        <StyledHeader padding="20px 0 0 0" text_transform="uppercase">
                            Open
                        </StyledHeader>
                        <StyledHeader
                            border_bottom="1px solid var(--color-sand-1)"
                            padding="25px 0"
                            text_transform="uppercase"
                        >
                            Positions
                        </StyledHeader>
                        <StyledText padding="25px 0 5px" text_transform="uppercase">
                            Back-end Development
                        </StyledText>
                        <StyledText text_transform="uppercase">Business Intelligence</StyledText>
                        <StyledText text_transform="uppercase">DevOps</StyledText>
                        <StyledText text_transform="uppercase">Quantitative</StyledText>
                        <StyledText text_transform="uppercase">Mobile app Development</StyledText>
                        <Header
                            color="var(--color-sand-4)"
                            font_size="18px"
                            font_weight="normal"
                            padding="25px 0"
                        >
                            and more...
                        </Header>
                    </OpenPositionsInfo>
                </ContainerWrapper>
            </OpenPositionsContainer>
        </>
    )
}

export default OpenPositions
