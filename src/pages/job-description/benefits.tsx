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
} from 'images/common/jd'

const JobTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const JobTitleContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`

const StyledHeader = styled(Header)`
    text-transform: uppercase;
    color: var(--color-sand-4);
    padding-right: 40px;
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
`

const StyledImg = styled.img`
    padding-right: 50px;
`

const Card = styled(Flex)`
    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    justify-content: center;
    max-width: 370px;
    height: 250px;
    padding: 55px 0;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: white;
    margin: 15px;
    border-radius: 5px;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const LocationContainer = styled(Flex)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
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
    font-family: ${(props) => props.font_family || 'Poppins'};
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
        <JobTitleContainer>
            <JobTitleContainerWrapper>
                <BenefitsImageContainer>
                    <StyledHeader padding="40px 0">Benefits</StyledHeader>
                    <StyledImg src={Benefits} />
                </BenefitsImageContainer>
                <Flex wrap="wrap" jc="center">
                    {data.map(({ icon, text }, index) => {
                        return (
                            <Card key={index} ai="center">
                                <img src={icon} />
                                <CardInfo>
                                    <Header padding="10px 10px 0" font_size="14px">
                                        {text}
                                    </Header>
                                </CardInfo>
                            </Card>
                        )
                    })}
                </Flex>
                <LocationContainer>
                    <Card direction="row" ai="center">
                        <LocationImageContainer>
                            <StyledSSText font_family="Maven Pro Bold">Location</StyledSSText>
                            <StyledText>Dubai, the UAE</StyledText>
                        </LocationImageContainer>
                        <img src={Location} />
                    </Card>
                </LocationContainer>
            </JobTitleContainerWrapper>
        </JobTitleContainer>
    )
}

export default BenefitsList
