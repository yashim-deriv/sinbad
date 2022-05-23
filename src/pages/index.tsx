import React from 'react'
import styled from 'styled-components'

type CarouselProps = {
    font_size?: string
}

const CarouselContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
`
const CarouselText = styled.div<CarouselProps>`
    width: 40rem;
    font-size: ${(props) => (props.font_size ? props.font_size : '16px')};
    color: ${(props) => (props.color ? props.color : 'black')};
    padding-bottom: 10px;
`
const CarouselImage = styled.img``

const WelcomeContainer = styled.div`
    width: 100%;
    height: 200px;
`
const OurTermsContainer = styled.div`
    width: 100%;
    height: 200px;
`
const TechStackContainer = styled.div`
    width: 100%;
    height: 200px;
`
const JoinUsContainer = styled.div`
    width: 100%;
    height: 200px;
`
const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Home = () => {
    return (
        <HomeContainer>
            <CarouselContainer>
                <CarouselText color="red">Sinbad Sowtfare</CarouselText>
                <CarouselText font_size="24px">TRANSFORMING IDEAS INTO SOLUTIONS</CarouselText>
                <CarouselText color="red">Designing scalable apps</CarouselText>
            </CarouselContainer>
            <WelcomeContainer>Welcome</WelcomeContainer>
            <OurTermsContainer>OurTerms</OurTermsContainer>
            <TechStackContainer>TechStack</TechStackContainer>
            <JoinUsContainer>JoinUs</JoinUsContainer>
        </HomeContainer>
    )
}

export default Home
