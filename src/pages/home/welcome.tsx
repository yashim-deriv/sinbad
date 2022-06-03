import React from 'react'
import styled from 'styled-components'
import { IconProps } from '../index'
import Random from 'images/svg/random.svg'
import Sinbad0 from 'images/common/carousel/sinbad-0.png'
import Sinbad1 from 'images/common/carousel/sinbad-1.png'
import Sinbad2 from 'images/common/carousel/sinbad-2.png'
import Flex from 'common/components/containers/flex'
import { Text, Header, ImageContainer } from 'common/components/containers'
import Table, { StyledProps } from 'common/components/containers/table'

const WelcomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f7cd43;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`

const StyledFlex = styled(Flex)`
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

const Card = styled(Flex)<StyledProps>`
    max-width: 324px;
    height: 290px;
    padding: 32px 44px 32px 32px;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    margin: ${(props) => props.margin || '0 40px 40px 0'};
    border-radius: 8px;
    justify-content: flex-end;
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

const OurTermsContainer = styled.div`
    display: flex;
    width: 1140px;
    height: 480px;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const TermsTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    width: 100%;
    height: 200px;
    padding: 30px 0 30px 150px;
`
const OurTermsTable = styled.div`
    width: 140px;
    height: 340px;
    font-size: 20px;
    font-weight: bold;
`

const data = {
    our_service: {
        first: {
            header: 'App development & integration',
            text: 'We create desktop and mobile software and also manage complex integrations with existing systems',
            icon: Random,
        },
        other: [
            {
                header: 'Ideation',
                text: 'With research, analysis, ideation, and strategising, we translate our clients needs into opportunities for digital innovation',
                icon: Random,
            },
            {
                header: 'Quality assurance',
                text: 'Whatever we build goes through rigorous to make sure its quality and security meet our tough standarts',
                icon: Random,
            },
            {
                header: 'Product design',
                text: 'The journey from vision to intuitive software starts here. We design winning products for the fintech industry',
                icon: Random,
            },
            {
                header: 'Software maintenance',
                text: 'Offering lifetime maintenance and upgrading services, we continue to 0pxain our clients digital partner',
                icon: Random,
            },
        ],
    },
    our_terms: {
        first_column: [
            {
                icon: Random,
                text: 'Mobile App development',
            },
            {
                icon: Random,
                text: 'Full-stack Development',
            },
            {
                icon: Random,
                text: 'UI/UX',
            },
            {
                icon: Random,
                text: 'Business Intelligence',
            },
        ],

        second_column: [
            {
                icon: Random,
                text: 'Quantitative Analysis',
            },
            {
                icon: Random,
                text: 'Data Science',
            },
            {
                icon: Random,
                text: 'DevOps',
            },
            {
                icon: Random,
                text: 'Quality Assurance',
            },
        ],
    },
}

const carousel = [{ icon: Sinbad0 }, { icon: Sinbad1 }, { icon: Sinbad2 }]

const Welcome = ({ active }: IconProps) => {
    return (
        <WelcomeContainer>
            <TextContainer>
                <Header>WELCOME TO THE SINBAD SOFTWARE</Header>
                <Text width="720px" text_align="center">
                    Sinbad Software LLC provides software development services and IT solutions for
                    the fintech industri. At every step of the way, we aim to give our clients the
                    power to go beyond digital boundaires and surpass their competitors in the
                    ever-evolving fintech landscape
                </Text>
            </TextContainer>
            <CardContainer>
                <Card direction="column" ai="center" jc="start" margin="170px 0">
                    <img src={data.our_service.first.icon} alt="icon" />
                    <CardHeader>{data.our_service.first.header}</CardHeader>
                    <CardText>{data.our_service.first.text}</CardText>
                </Card>
                <StyledFlex width="820px" wrap="wrap">
                    {data.our_service.other.map(({ header, text, icon }, index) => (
                        <Card key={index} index={index} direction="column" ai="center" jc="start">
                            <img src={icon} alt="icon" />
                            <CardHeader>{header}</CardHeader>
                            <CardText>{text}</CardText>
                        </Card>
                    ))}
                </StyledFlex>
            </CardContainer>
            <OurTermsContainer>
                <TermsTextContainer>
                    <Header color="red">Sinbad Software</Header>
                    <Header font_size="28px">Revolutionising fintech needs amazing software</Header>
                    <Text padding="15px 0 15px">
                        Our mission is to develop world-class fintech software solutions taht will
                        give our clients a cutting edge.
                    </Text>
                    <Text padding="0 0 20px">
                        With a deep undestanding of the fintech industry and a talented team, we are
                        ready to provide clients around the world with they need - from custom
                        software to mobile applications, websites, web applications, information
                        architecture, and more.
                    </Text>
                    <Header color="red" font_size="18px" font_weight="normal">
                        Where others see gaps, we see an opportunity to build a powerhouse
                    </Header>
                </TermsTextContainer>
                {carousel.map(
                    (current_item, index) =>
                        index == active && <ImageContainer key={active} src={current_item.icon} />,
                )}
                <OurTermsTable>
                    Our Terms
                    <Table data={data} />
                </OurTermsTable>
            </OurTermsContainer>
        </WelcomeContainer>
    )
}

export default Welcome
