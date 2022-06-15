import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ContainerWrapper, Flex, ImageContainer } from 'components/containers'
import { BI, IT, LinkArrow, Product } from 'images/common/careers'
import device from 'themes/device'

type StyledTextProps = {
    font_family?: string
    uppercase?: string
}

type PositionsType = {
    icon: string
    position: string
    text: string
    link: string
}

const OpenPositionsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const OpenPositionsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`

const StyledHeader = styled.div<StyledTextProps>`
    font-size: 4.8rem;
    line-height: 51px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => (props.uppercase ? 'Maven Pro Bold' : 'Maven Pro')};
    text-transform: ${(props) => props.uppercase || 'unset'};
    padding: 10px 0 20px;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
`

const Card = styled(Flex)`
    display: flex;
    justify-content: space-between;
    max-width: 360px;
    width: 100%;
    height: 444px;
    padding: 40px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: white;
    margin: 20px;
    border-radius: 8px;
`
const CardHeader = styled.div<StyledTextProps>`
    font-size: 2.2rem;
    line-height: 34px;
    color: var(--color-sand-4);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    padding: 20px 0 10px;

    @media ${device.laptop} {
        font-size: 2.8rem;
    }
`
const CardText = styled.div<StyledTextProps>`
    max-width: 267px;
    width: 100%;
    font-size: 1.7rem;
    line-height: 26px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: center;
    padding: 15px 0;

    @media ${device.laptop} {
        font-size: 2.2rem;
    }
`

const CardLinkText = styled.div<StyledTextProps>`
    font-size: 1.4rem;
    line-height: 22px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-transform: uppercase;
    padding-right: 20px;

    @media ${device.laptop} {
        font-size: 2rem;
    }
`

const CardButton = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
`

const positions: PositionsType[] = [
    {
        icon: IT,
        position: 'Information security',
        text: 'Provide the best solutions for our clients by taking a hollstic view of our technical environment',
        link: '',
    },
    {
        icon: Product,
        position: 'Product design',
        text: 'Deliver intuitive and beautiful designs that will impress our clients and help them reach their goals',
        link: '',
    },
    {
        icon: BI,
        position: 'Business intelligence',
        text: 'Provide analytical and strategic insights that enchance the growth of our clients business, products, and services',
        link: '',
    },
]

const OpenPositions = () => {
    return (
        <OpenPositionsContainer>
            <OpenPositionsContainerWrapper>
                <HeaderContainer>
                    <StyledHeader uppercase="uppercase">Open positions</StyledHeader>
                    <StyledHeader>Make your passion your career</StyledHeader>
                </HeaderContainer>
                <CardContainer>
                    {positions.map(({ position, text, icon, link }, index) => {
                        return (
                            <Card key={index} direction="column" ai="center" jc="center">
                                <ImageContainer src={icon} width="160px" height="160px" />
                                <CardHeader>{position}</CardHeader>
                                <CardText>{text}</CardText>
                                <CardButton to={link}>
                                    <CardLinkText> See jobs</CardLinkText>
                                    <ImageContainer
                                        src={LinkArrow}
                                        width="30px"
                                        height="30px"
                                        max_height="unset"
                                    />
                                </CardButton>
                            </Card>
                        )
                    })}
                </CardContainer>
            </OpenPositionsContainerWrapper>
        </OpenPositionsContainer>
    )
}

export default OpenPositions
