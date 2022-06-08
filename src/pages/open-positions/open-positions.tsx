import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
//import { ContainerWrapper } from 'common/components/containers/common/style'
import { ImageContainer, Header, Text } from 'components/containers/main'
import Sinbad0 from 'pages/open-positions/images/first-section.png'
import RightArrow from 'images/svg/right-arrow.svg'
import Flex from 'components/containers/flex'

type CardProps = {
    index?: number
}

type PositionsType = {
    position?: string
    text?: string
}

const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const PositionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: var(--color-sand-1);
`
const Image = styled.div`
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 6rem;
    width: '60%';
`

const StyledHeader = styled(Header)`
    width: 100px;
    text-transform: uppercase;
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
const CardButton = styled(Link)`
    display: flex;
    width: 45px;
    height: 10px;
    background-image: url(${RightArrow});
    background-repeat: no-repeat;
    background-size: 15px 15px;
    background-position: right;
    text-decoration: none;
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
    justify-content: space-around;
    align-items: center;
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
        <ContainerWrapper>
            <PositionsHeader>
                <HeaderContainer>
                    <Header padding="20px 20px" font_size="50px">
                        IT CAREERS FOR
                    </Header>
                    <Header padding="20px 20px" font_size="50px" color="var(--color-sand-4)">
                        CHALLENGE
                    </Header>
                    <Header padding="20px 20px" font_size="50px">
                        SEEKERS
                    </Header>
                </HeaderContainer>
                <Image>
                    <ImageContainer src={Sinbad0} width="60%" />
                </Image>
            </PositionsHeader>
            <OpenPositionsContainer>
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
                                        <CardButton to="/some-postition">MORE</CardButton>
                                    </Card>
                                )
                            })}
                        </StyledFlex>
                    </PositionsCarousel>
                </PositionsCarouselContainer>
                <OpenPositionsInfo>
                    <StyledHeader padding="20px 0 0 0">Open</StyledHeader>
                    <StyledHeader border_bottom="1px solid var(--color-sand-1)" padding="25px 0">
                        Positions
                    </StyledHeader>
                    <StyledText padding="25px 0 5px">Back-end Development</StyledText>
                    <StyledText>Business Intelligence</StyledText>
                    <StyledText>DevOps</StyledText>
                    <StyledText>Quantitative</StyledText>
                    <StyledText>Mobile app Development</StyledText>
                    <Header
                        color="var(--color-sand-4)"
                        font_size="18px"
                        font_weight="normal"
                        padding="25px 0"
                    >
                        and more...
                    </Header>
                </OpenPositionsInfo>
            </OpenPositionsContainer>
        </ContainerWrapper>
    )
}

export default OpenPositions
