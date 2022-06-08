import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ImageContainer, Header, Text } from 'components/containers/main'
import { ContainerWrapper } from 'components/containers/common/style'
import Sinbad0 from 'pages/open-positions/images/first-section.png'
import Background from 'images/common/homepage/carousel/background.png'
import RightArrow from 'pages/open-positions/images/arrow.png'
import Flex from 'components/containers/flex'

type CardProps = {
    index?: number
}

type PositionsType = {
    position?: string
    text?: string
}

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
const PositionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;
`
const Image = styled.div`
    padding-left: 100px;
    display: flex;
    flex-direction: row;
    padding-top: 85px;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 140px;
`

const StyledHeader = styled(Header)`
    width: 100px;
`

/* stylelint-disable */

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
`

const PositionsCarousel = styled.div``

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

    @media (max-width: 930px) {
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
const LinkContainer = styled.div`
    display: flex;
`

const StyledFlex = styled(Flex)`
    @media (max-width: 930px) {
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
    padding-left: 31px;
    top: 10px;
`

const OpenPositionsInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    align-self: start;
`

const positions: PositionsType[] = [
    {
        position: 'Mobile App Development',
        text: "We're looking for a talented Mobile App Developer to design and develop fintech applications for iOS and Android platforms",
    },
    {
        position: 'Back-End Developer',
        text: "We're looking for an expirienced Back-end Developer to develop complex back-end solutions for fast-paced fintech companies.",
    },
    {
        position: 'Back-End Developer',
        text: "We're looking for an expirienced Back-end Developer to develop complex back-end solutions for fast-paced fintech companies.",
    },
    {
        position: 'Data Engineer',
        text: "We're looking for a detail oriented Data Engineer to convert data into analyses and practical recommendations for fast-paced, global fintech companies",
    },
    {
        position: 'Quantitative Analyst',
        text: "We're looking for a talented Quantitative Analyst to develop strong pricing and risk management algorithms for fintech companies with fully automated transactions",
    },
    {
        position: 'Mobile App Development',
        text: "We're looking for a talented Mobile App Developer to design and develop fintech applications for iOS and Android platforms",
    },
    {
        position: 'Back-End Developer',
        text: "We're looking for an expirienced Back-end Developer to develop complex back-end solutions for fast-paced fintech companies.",
    },

    {
        position: 'Back-End Developer',
        text: "We're looking for an expirienced Back-end Developer to develop complex back-end solutions for fast-paced fintech companies.",
    },
    {
        position: 'Back-End Developer',
        text: "We're looking for an expirienced Back-end Developer to develop complex back-end solutions for fast-paced fintech companies.",
    },
    {
        position: 'Data Engineer',
        text: "We're looking for a detail oriented Data Engineer to convert data into analyses and practical recommendations for fast-paced, global fintech companies",
    },
    {
        position: 'Quantitative Analyst',
        text: "We're looking for a talented Quantitative Analyst to develop strong pricing and risk management algorithms for fintech companies with fully automated transactions",
    },
    {
        position: 'Mobile App Development',
        text: "We're looking for a talented Mobile App Developer to design and develop fintech applications for iOS and Android platforms",
    },
    {
        position: 'Mobile App Development',
        text: "We're looking for a talented Mobile App Developer to design and develop fintech applications for iOS and Android platforms",
    },
]

const OpenPositions = () => {
    return (
        <>
            <ContainersWrapper>
                <ContainerWrapper>
                    <PositionsHeader>
                        <HeaderContainer>
                            <Header
                                padding="20px 0px 20px 0px"
                                font_size="50px"
                                text_transform="uppercase"
                            >
                                It Careers For
                            </Header>
                            <Header
                                padding="20px 0px"
                                font_size="50px"
                                color="var(--color-sand-4)"
                                text_transform="uppercase"
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
                        <Image>
                            <ImageContainer src={Sinbad0} width="auto" height="100%" />
                        </Image>
                    </PositionsHeader>
                </ContainerWrapper>
            </ContainersWrapper>
            <OpenPositionsContainer>
                <ContainerWrapper>
                    <PositionsCarouselContainer>
                        <PositionsCarousel>
                            <StyledFlex width="760px" wrap="wrap">
                                {positions.map(({ position, text }, index) => {
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
                                                padding="10px 0px"
                                            >
                                                {position}
                                            </Header>
                                            <Text font_size="14px" text_align="center">
                                                {text}
                                            </Text>
                                            <LinkContainer>
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
                        </PositionsCarousel>
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
