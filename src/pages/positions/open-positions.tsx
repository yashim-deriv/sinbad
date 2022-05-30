import React from 'react'
import styled from 'styled-components'
import { ImageContainer, Header, Text } from 'common/components/containers/main'
import Dasboard from 'images/common/dashboard.png'
import Sinbad0 from 'images/common/sinbad-positions-0.png'
import Flex from 'common/components/containers/flex'

const PositionsHeader = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 40px;
`
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 70px;
`

const PositionsCarousel = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
`

const Card = styled(Flex)`
    max-width: 324px;
    height: 290px;
    padding: 32px 44px 32px 32px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    margin: ${(props) => (props.margin ? props.margin : '0 40px 40px 0')};
    border-radius: 8px;
    justify-content: flex-end;
    @media (max-width: 930px) {
        order: ${(props) => (props.index === 2 ? 1 : props.index === 1 ? 2 : props.index)};
        margin: 0 0 19px;
    }
`
const StyledFlex = styled(Flex)`
    @media (max-width: 930px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`
const CardHeader = styled.div`
    font-size: 18px;
    padding: 20px;
    text-align: center;
`
const CardText = styled.div`
    width: 240px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`

const positions = [
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
]
const OpenPositionsContaner = styled.div``

const OpenPositions = () => {
    return (
        <>
            <PositionsHeader>
                <HeaderContainer>
                    <Header>IT CAREERS FOR</Header>
                    <Header color="red">CHALLENGE</Header>
                    <Header>SEEKERS</Header>
                </HeaderContainer>
                <ImageContainer src={Dasboard} />
                <ImageContainer src={Sinbad0} />
            </PositionsHeader>
            <>
                <PositionsCarousel>
                    <StyledFlex width="820px" wrap="wrap">
                        {positions.map(({ title, text }, index) => (
                            <Card
                                key={index}
                                index={index}
                                direction="column"
                                ai="center"
                                jc="start"
                            >
                                <CardHeader>{title}</CardHeader>
                                <CardText>{text}</CardText>
                            </Card>
                        ))}
                    </StyledFlex>
                </PositionsCarousel>
                <OpenPositionsContaner>
                    <Header>OPEN POSITIONS</Header>
                    <Text>BACK-END DEVELOPMENT</Text>
                    <Text>BUSINESS INTELLIGENCE</Text>
                    <Text>DEVOPS</Text>
                    <Text>QUANTITATIVE</Text>
                    <Text>MOBILE APP DEVELOPMENT</Text>
                    <Header color="red" font_size="18px" font_weight="normal">
                        and more...
                    </Header>
                </OpenPositionsContaner>
            </>
        </>
    )
}

export default OpenPositions
