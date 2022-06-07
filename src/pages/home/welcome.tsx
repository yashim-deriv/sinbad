import React from 'react'
import styled from 'styled-components'
import { First, Other0, Other1, Other2, Other3 } from 'images/common/homepage/welcome'
import Flex from 'components/containers/flex'
import { Text, Header } from 'components/containers'
import { TermProps } from 'components/containers/table'

type StyledTextProps = {
    font_family?: string
}

const WelcomeContainerWrapper = styled.div`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    background-color: var(--color-sand-1);
    width: 100%;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
`
const StyledHeader = styled(Header)<StyledTextProps>`
    font-size: 48px;
    line-height: 50px;
    color: #1b1b1b;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: center;
    text-transform: uppercase;
`

const StyledText = styled(Text)<StyledTextProps>`
    width: 982px;
    height: 96px;
    font-size: 19px;
    line-height: 34px;
    color: #4c4c4c;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: center;
`

const StyledFlex = styled(Flex)`
    max-width: 850px;

    @media (max-width: 930px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
`

const Card = styled.div<TermProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 350px;
    height: 410px;
    padding: 32px 44px 32px 32px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    margin: ${(props) => props.margin || '0 40px 40px 0'};
    border-radius: 4px;
    filter: drop-shadow(0 13px 17.5px rgba(0, 0, 0, 0.13));
`

const CardHeader = styled.div<StyledTextProps>`
    max-width: 241px;
    font-size: 22px;
    line-height: 27px;
    color: #0a0a0a;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: center;
    padding: 20px 0;
`

const CardText = styled.div<StyledTextProps>`
    width: 241px;
    height: 83px;
    font-size: 17px;
    line-height: 26px;
    color: #4c4c4c;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: center;
`

const data = {
    first: {
        header: 'App development & integration',
        text: 'We create desktop and mobile software and also manage complex integrations with existing systems',
        icon: First,
    },
    other: [
        {
            header: 'Ideation',
            text: 'With research, analysis, ideation, and strategising, we translate our clients needs into opportunities for digital innovation',
            icon: Other0,
        },
        {
            header: 'Quality assurance',
            text: 'Whatever we build goes through rigorous to make sure its quality and security meet our tough standarts',
            icon: Other1,
        },
        {
            header: 'Product design',
            text: 'The journey from vision to intuitive software starts here. We design winning products for the fintech industry',
            icon: Other2,
        },
        {
            header: 'Software maintenance',
            text: 'Offering lifetime maintenance and upgrading services, we continue to 0pxain our clients digital partner',
            icon: Other3,
        },
    ],
}

const Welcome = () => {
    return (
        <>
            <WelcomeContainerWrapper>
                <TextContainer>
                    <StyledHeader>Welcome to Sinbad Software</StyledHeader>
                    <StyledText>
                        Sinbad Software LLC provides software development services and IT solutions
                        for the fintech industri. At every step of the way, we aim to give our
                        clients the power to go beyond digital boundaires and surpass their
                        competitors in the ever-evolving fintech landscape
                    </StyledText>
                </TextContainer>
                <CardContainer>
                    <Card margin="240px 0">
                        <img src={data.first.icon} alt="icon" />
                        <CardHeader>{data.first.header}</CardHeader>
                        <CardText>{data.first.text}</CardText>
                    </Card>
                    <StyledFlex wrap="wrap">
                        {data.other.map(({ header, text, icon }, index) => (
                            <Card key={index} index={index}>
                                <img src={icon} alt="icon" />
                                <CardHeader>{header}</CardHeader>
                                <CardText>{text}</CardText>
                            </Card>
                        ))}
                    </StyledFlex>
                </CardContainer>
            </WelcomeContainerWrapper>
        </>
    )
}

export default Welcome
