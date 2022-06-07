import React from 'react'
import styled from 'styled-components'
import { Flex, Header, ImageContainer, Text } from 'common/components/containers'
import Random from 'images/svg/random.svg'

const HiringProcessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

const StyledHeader = styled(Header)`
    text-transform: uppercase;
    padding: 0 0 30px;
`

const StyledBorder = styled.div`
    border-top: 2px solid gray;
    width: 120px;
`

const StyleFlex = styled(Flex)`
    padding: 50px 0 80px;
`

const Card = styled(Flex)`
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    height: 150px;
    padding: 10px 20px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: white;
    margin: 5px;
    border-radius: 8px;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`

type DataType = {
    number: number
    icon: string
    header: string
    text: string
}

const data: DataType[] = [
    {
        number: 1,
        icon: Random,
        header: 'Send curriculum vitae (CV)',
        text: 'Send your CV and a cover letter to hr@sinbad.software to get started.',
    },
    {
        number: 2,
        icon: Random,
        header: 'Self-assessment questionnarie',
        text: "We'll send you a questionnaire to help us learn more about you.",
    },
    {
        number: 3,
        icon: Random,
        header: 'Interview with HR and Manager',
        text: 'An HR representative and your potential manager will interview you. They will',
    },
    {
        number: 4,
        icon: Random,
        header: 'Interview with COO/CTO/CEO',
        text: "In this round, you'll speak with our COO, CTO, CEO depending on the role.",
    },
    {
        number: 5,
        icon: Random,
        header: 'Background and reference check',
        text: 'Upon approval, our team will do a background and reference check.',
    },
    {
        number: 6,
        icon: Random,
        header: 'Job offer',
        text: "If everything goes well, you'll recieve a job offer. Be ready, as your new adventure with us is about to begin.",
    },
    {
        number: 7,
        icon: Random,
        header: "You're one of us",
        text: "Welcome to Sinbad! You'll recieve your start date and the details of your onboarding programme.",
    },
]

const HiringProcess = () => {
    return (
        <HiringProcessContainer>
            <StyledHeader>Our hiring process</StyledHeader>
            <StyledBorder />
            <StyleFlex width="1100px" wrap="wrap" jc="flex-start">
                {data.map(({ icon, header, text, number }, index) => {
                    return (
                        <Card key={index} direction="row" ai="center">
                            <ImageContainer src={icon} width="50px" height="50px" />
                            <CardInfo>
                                <Header padding="10px 10px 0" font_size="14px">
                                    {header}
                                </Header>
                                <Text
                                    font_size="12px"
                                    line_height="14px"
                                    padding="10px 10px"
                                    width="180px"
                                >
                                    {text}
                                </Text>
                            </CardInfo>
                            <Text padding="0 0 110px 10px" color="gray" font_size="24px">
                                {number}
                            </Text>
                        </Card>
                    )
                })}
            </StyleFlex>
        </HiringProcessContainer>
    )
}

export default HiringProcess
