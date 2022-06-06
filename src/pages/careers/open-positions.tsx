import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Flex, Header, ImageContainer, Text } from 'common/components/containers'
import RightArrow from 'images/svg/right-arrow.svg'
import Random from 'images/svg/random.svg'

const OpenPositionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
`

const StyledHeader = styled(Header)`
    text-transform: uppercase;
`

const Card = styled(Flex)`
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    height: 290px;
    padding: 30px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    margin: 20px;
    border-radius: 8px;
`

const CardButton = styled(Link)`
    display: flex;
    width: 65px;
    height: 10px;
    background-image: url(${RightArrow});
    background-repeat: no-repeat;
    background-size: 15px 15px;
    background-position: right;
    text-decoration: none;
    text-transform: uppercase;
`
type PositionsType = {
    icon: string
    position: string
    text: string
    link: string
}

const positions: PositionsType[] = [
    {
        icon: Random,
        position: 'Information security',
        text: 'Provide the best solutions for our clients by taking a hollstic view of our technical environment',
        link: '',
    },
    {
        icon: Random,
        position: 'Product design',
        text: 'Deliver intuitive and beautiful designs that will impress our clients and help them reach their goals',
        link: '',
    },
    {
        icon: Random,
        position: 'Business intelligence',
        text: 'Provide analytical and strategic insights that enchance the growth of our clients business, products, and services',
        link: '',
    },
    {
        icon: Random,
        position: 'Information security',
        text: 'Provide the best solutions for our clients by taking a hollstic view of our technical environment',
        link: '',
    },
    {
        icon: Random,
        position: 'Product design',
        text: 'Deliver intuitive and beautiful designs that will impress our clients and help them reach their goals',
        link: '',
    },
    {
        icon: Random,
        position: 'Business intelligence',
        text: 'Provide analytical and strategic insights that enchance the growth of our clients business, products, and services',
        link: '',
    },
]

const OpenPositions = () => {
    return (
        <OpenPositionsContainer>
            <HeaderContainer>
                <StyledHeader>OPEN POSITIONS</StyledHeader>
                <Header font_weight="normal">Make your passon in your career</Header>
            </HeaderContainer>
            <Flex width="1100px" wrap="wrap">
                {positions.map(({ position, text, icon, link }, index) => {
                    return (
                        <Card key={index} direction="column" ai="center" jc="center">
                            <ImageContainer src={icon} width="80px" height="80px" />
                            <Header
                                color="red"
                                text_align="center"
                                font_weight="normal"
                                padding="unset"
                            >
                                {position}
                            </Header>
                            <Text font_size="14px" text_align="center" padding="unset">
                                {text}
                            </Text>
                            <CardButton to={link}>SEE JOBS</CardButton>
                        </Card>
                    )
                })}
            </Flex>
        </OpenPositionsContainer>
    )
}

export default OpenPositions
