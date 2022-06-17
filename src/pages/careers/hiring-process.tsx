import React, { ReactNode } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ContainerWrapper, Flex, ImageContainer } from 'components/containers'
import device from 'themes/device'

const HiringProcessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ecf6f8;
`

const HiringProcessContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledHeader = styled.div<{ uppercase?: string }>`
    font-size: 4.8rem;
    line-height: 51px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => props.uppercase || 'Maven Pro Bold'};
    text-transform: uppercase;
    padding: 0 0 30px;
`

const StyledBorder = styled.div`
    border-top: 3px solid white;
    width: 174px;
`

const StyledFlex = styled.div`
    padding: 50px 0 80px;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media ${device.laptopM} {
        justify-content: center;
    }
`

const Card = styled(Flex)`
    display: flex;
    max-width: 390px;
    width: 100%;
    height: 220px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    padding: 10px 10px 20px 20px;
    margin: 5px;
    border-radius: 5px;
`

const CardInfo = styled.div`
    display: flex;
    width: calc(100% - 90px);
    box-sizing: box;
    flex-direction: column;
    padding: 20px 0 0 20px;
`

const CardHeader = styled.div<{ font_family?: string }>`
    font-size: 2.2rem;
    line-height: 28px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
`
const CardText = styled.div<{ font_family?: string }>`
    max-width: 195px;
    width: 100%;
    font-size: 1.7rem;
    line-height: 26px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: left;
    padding: 15px 0;
`

const CardNumber = styled.div<{ font_family?: string }>`
    display: flex;
    font-size: 3.8rem;
    line-height: 22px;
    color: #dae3e5;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Poppins'};
`

const StyledImageContainer = styled(ImageContainer)`
    width: 90px;
    height: 90px;
    margin-top: 30px;
`

type DataType = {
    icon: ReactNode
    header: string
    text: string
}

const data: DataType[] = [
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/cv.png"
                alt="email icon"
                placeholder="none"
                objectFit="fill"
            />
        ),
        header: 'Send curriculum vitae (CV)',
        text: 'Send your CV and a cover letter to hr@sinbad.software to get started.',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/questions.png"
                alt="question icon"
                placeholder="none"
                objectFit="fill"
            />
        ),
        header: 'Self-assessment questionnarie',
        text: "We'll send you a questionnaire to help us learn more about you.",
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/interview.png"
                alt="inteview icon"
                placeholder="none"
                objectFit="fill"
            />
        ),
        header: 'Interview with HR and Manager',
        text: 'An HR representative and your potential manager will interview you. They will',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/interview2.png"
                alt="second interview icon"
                placeholder="none"
                objectFit="contain"
            />
        ),
        header: 'Interview with COO/CTO/CEO',
        text: "In this round, you'll speak with our COO, CTO, CEO depending on the role.",
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/checking.png"
                alt="background check icon"
                placeholder="none"
                objectFit="fill"
            />
        ),
        header: 'Background and reference check',
        text: 'Upon approval, our team will do a background and reference check.',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/offer.png"
                alt="job offer icon"
                placeholder="none"
                objectFit="fill"
            />
        ),
        header: 'Job offer',
        text: "If everything goes well, you'll recieve a job offer. Be ready, as your new adventure with us is about to begin.",
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/you-in.png"
                alt="selected people icon"
                placeholder="none"
                objectFit="fill"
            />
        ),
        header: "You're one of us",
        text: "Welcome to Sinbad! You'll recieve your start date and the details of your onboarding programme.",
    },
]

const HiringProcess = () => {
    return (
        <HiringProcessContainer>
            <HiringProcessContainerWrapper>
                <StyledHeader>Our hiring process</StyledHeader>
                <StyledBorder />
                <StyledFlex>
                    {data.map(({ icon, header, text }, index) => {
                        return (
                            <Card key={index} direction="row" ai="flex-start" jc="space-between">
                                <StyledImageContainer>{icon}</StyledImageContainer>
                                <CardInfo>
                                    <CardHeader>{header}</CardHeader>
                                    <CardText>{text}</CardText>
                                </CardInfo>
                                <CardNumber>{index + 1}</CardNumber>
                            </Card>
                        )
                    })}
                </StyledFlex>
            </HiringProcessContainerWrapper>
        </HiringProcessContainer>
    )
}

export default HiringProcess
