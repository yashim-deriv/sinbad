import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, Flex, Header } from 'components/containers'
import {
    Benefits,
    Salary,
    Bonus,
    Insurance,
    House,
    DressCode,
    Contract,
    Location,
    BlueBackground,
} from 'images/common/jd'
import device from 'themes/device'

const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BlueBackground});
    background-repeat: no-repeat;
    background-size: 45% 100%;
    width: 100%;
    height: 100%;
`

const BenefitsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    @media ${device.laptop} {
        align-items: center;
    }
`

const StyledHeader = styled.div<{ font_family?: string }>`
    text-transform: uppercase;
    color: var(--color-sand-4);
    padding: 40px 40px 40px 0;
    font-size: 3.8rem;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: right;
`

const BenefitsImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 30px 0;
`

const LocationImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: 30px;

    div:nth-child(1) {
        text-transform: uppercase;
        font-size: 3.8rem;
    }
`

const StyledImg = styled.img`
    padding-right: 50px;
`

const Card = styled(Flex)<{ margin?: string; height?: string }>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    justify-content: center;
    max-width: 370px;
    height: ${(props) => props.height || '280px'};
    padding: 55px 0;
    box-shadow: rgba(14, 14, 14, 0.1) 4px 4px 6px 6px;
    background-color: white;
    margin: ${(props) => props.margin || '15px'};
    border-radius: 5px;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const CardHeader = styled.div<{ font_family?: string }>`
    font-size: 1.9rem;
    line-height: 32px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    padding: 25px 10px 0;
`

const LocationContainer = styled(Flex)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media ${device.laptopL} {
        justify-content: center;
    }
`

const StyledSSText = styled.div<{ font_family?: string }>`
    padding: unset;
    color: var(--color-sand-4);
    font-size: 3.3rem;
    line-height: 62px;
    font-weight: 656;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    padding-right: 5px;
`
const StyledText = styled.div<{ font_family?: string }>`
    max-width: 350px;
    font-size: 1.6rem;
    line-height: 27px;
    color: #1b1b1b;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
    padding-bottom: 10px;
`

const data = [
    { text: 'Market-based salary', icon: Salary },
    { text: 'Annual perfomance bonus', icon: Bonus },
    { text: 'Medical insurance', icon: Insurance },
    { text: 'Housing & transoration allowance', icon: House },
    { text: 'Casueal dress code', icon: DressCode },
    { text: 'Work permit', icon: Contract },
]

const BenefitsList = () => {
    return (
        <BenefitsContainer>
            <BenefitsContainerWrapper>
                <BenefitsImageContainer>
                    <StyledHeader>Benefits</StyledHeader>
                    <StyledImg src={Benefits} />
                </BenefitsImageContainer>
                <Flex wrap="wrap" jc="center">
                    {data.map(({ icon, text }, index) => {
                        return (
                            <Card key={index} ai="center">
                                <img src={icon} />
                                <CardInfo>
                                    <CardHeader>{text}</CardHeader>
                                </CardInfo>
                            </Card>
                        )
                    })}
                </Flex>
                <LocationContainer>
                    <Card direction="row" ai="center" margin="50px 15px 15px 15px" height="180px">
                        <LocationImageContainer>
                            <StyledSSText font_family="Maven Pro Bold">Location</StyledSSText>
                            <StyledText>Dubai, the UAE</StyledText>
                        </LocationImageContainer>
                        <img src={Location} />
                    </Card>
                </LocationContainer>
            </BenefitsContainerWrapper>
        </BenefitsContainer>
    )
}

export default BenefitsList
