import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ImageContainer, Header, Text } from 'common/components/containers/main'
import Dasboard from 'images/common/dashboard.png'
import Sinbad0 from 'images/common/sinbad-positions-0.png'
import LeftArrow from 'images/svg/left-arrow.svg'
import RightArrow from 'images/svg/right-arrow.svg'
import Flex from 'common/components/containers/flex'

type CardProps = {
    index?: number
}

type PositionsType = {
    title?: string
    text?: string
}
const PositionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
`
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledHeader = styled(Header)`
    border-bottom: 1px solid gray;
    width: 100px;
    padding: 25px 0;
    text-transform: uppercase;
`

const StyledText = styled(Text)`
    padding: ${(props) => (props.padding ? props.padding : '5px 0')};
    text-transform: uppercase;
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
    background-color: var(--color-white);
    margin-right: ${(props) => (props.index == 0 ? '40px' : props.index == 2 ? '40px' : 'unset')};
    margin-bottom: ${(props) => (props.index < 2 ? '40px' : 'unset')};
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
`

const positions: PositionsType[] = [
    {
        title: 'some_one',
        text: "We're looking for a some_one",
    },
    {
        title: 'some_second',
        text: "We're looking for a talented some_second",
    },
    {
        title: 'Back-End Developer',
        text: "We're looking for an expirienced Back-end Developer to develop complex back-end solutions for fast-paced fintech companies.",
    },
    {
        title: 'Data Engineer',
        text: "We're looking for a detail oriented Data Engineer to convert data into analyses and practical recommendations for fast-paced, global fintech companies",
    },
    {
        title: 'Quantitative Analyst',
        text: "We're looking for a talented Quantitative Analyst to develop strong pricing and risk management algorithms for fintech companies with fully automated transactions",
    },
    {
        title: 'Mobile App Development',
        text: "We're looking for a talented Mobile App Developer to design and develop fintech applications for iOS and Android platforms",
    },
    {
        title: 'some_one',
        text: "We're looking for a some_one",
    },
    {
        title: 'some_second',
        text: "We're looking for a talented some_second",
    },
    {
        title: 'Back-End Developer',
        text: "We're looking for an expirienced Back-end Developer to develop complex back-end solutions for fast-paced fintech companies.",
    },
    {
        title: 'Data Engineer',
        text: "We're looking for a detail oriented Data Engineer to convert data into analyses and practical recommendations for fast-paced, global fintech companies",
    },
    {
        title: 'Quantitative Analyst',
        text: "We're looking for a talented Quantitative Analyst to develop strong pricing and risk management algorithms for fintech companies with fully automated transactions",
    },
    {
        title: 'Mobile App Development',
        text: "We're looking for a talented Mobile App Developer to design and develop fintech applications for iOS and Android platforms",
    },
]

const OpenPositions = () => {
    const [show_positions, setShowPositions] = useState({ first: 0, second: 4 })

    return (
        <>
            <PositionsHeader>
                <HeaderContainer>
                    <Header padding="5px 20px">IT CAREERS FOR</Header>
                    <Header padding="5px 20px" color="red">
                        CHALLENGE
                    </Header>
                    <Header padding="5px 20px">SEEKERS</Header>
                </HeaderContainer>
                <>
                    <ImageContainer src={Dasboard} />
                    <ImageContainer src={Sinbad0} />
                </>
            </PositionsHeader>
            <OpenPositionsContainer>
                <PositionsCarouselContainer>
                    {show_positions.first == 0 ? (
                        ''
                    ) : (
                        <ImageContainer
                            src={LeftArrow}
                            width="40px"
                            height="40px"
                            onClick={() =>
                                setShowPositions({
                                    first: show_positions.first - 4,
                                    second: show_positions.second - 4,
                                })
                            }
                        />
                    )}
                    <PositionsCarousel>
                        <StyledFlex width="720px" wrap="wrap">
                            {positions
                                .slice(show_positions.first, show_positions.second)
                                .map(({ title, text }, index) => {
                                    return (
                                        <Card
                                            key={index}
                                            index={index}
                                            direction="column"
                                            ai="center"
                                            jc="start"
                                        >
                                            <Header color="red" text_align="center">
                                                {title}
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
                    {show_positions.second >= positions.length ? (
                        ''
                    ) : (
                        <ImageContainer
                            src={RightArrow}
                            width="40px"
                            height="40px"
                            onClick={() =>
                                setShowPositions({
                                    first: show_positions.first + 4,
                                    second: show_positions.second + 4,
                                })
                            }
                        />
                    )}
                </PositionsCarouselContainer>
                <OpenPositionsInfo>
                    <StyledHeader>Open Positions</StyledHeader>
                    <StyledText padding="25px 0 5px">Back-end Development</StyledText>
                    <StyledText>Business Intelligence</StyledText>
                    <StyledText>DevOps</StyledText>
                    <StyledText>Quantitative</StyledText>
                    <StyledText>Mobile app Development</StyledText>
                    <Header color="red" font_size="18px" font_weight="normal" padding="25px 0">
                        and more...
                    </Header>
                </OpenPositionsInfo>
            </OpenPositionsContainer>
        </>
    )
}

export default OpenPositions
