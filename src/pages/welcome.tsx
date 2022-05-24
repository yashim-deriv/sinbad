import React from 'react'
import styled from 'styled-components'
import SimbadSmile from 'images/common/simbad-smile.png'
import Flex from 'common/components/containers/flex'

const WelcomeContainer = styled.div`
    width: 100%;
    height: 100%;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 200px;
    margin: 30px auto;
`

const HeaderText = styled.div`
    font-size: ${(props) => (props.font_size ? props.font_size : '24px')};
    font-weight: ${(props) => (props.font_weight ? props.font_weight : 'bold')};
    text-align: ${(props) => (props.text_align ? props.text_align : 'center')};
    padding-bottom: 20px;
    color: ${(props) => (props.color ? props.color : 'black')};
`
const CommonText = styled.div`
    width: 80rem;
    font-size: 14px;
    line-height: 20px;
    text-align: ${(props) => (props.text_align ? props.text_align : 'center')};
    padding: ${(props) => (props.padding ? props.padding : 'unset')};
`

const our_service_first = [
    {
        header: 'App development & integration',
        text: 'We create desktop and mobile software and also manage complex integrations with existing systems',
        icon: '',
    },
]

const our_service_other = [
    {
        header: 'Ideation',
        text: 'With research, analysis, ideation, and strategising, we translate our clients needs into opportunities for digital innovation',
        icon: '',
    },
    {
        header: 'Quality assurance',
        text: 'Whatever we build goes through rigorous to make sure its quality and security meet our tough standarts',
        icon: '',
    },
    {
        header: 'Product design',
        text: 'The journey from vision to intuitive software starts here. We design winning products for the fintech industry',
        icon: '',
    },
    {
        header: 'Software maintenance',
        text: 'Offering lifetime maintenance and upgrading services, we continue to remain our clients digital partner',
        icon: '',
    },
]

const StyledFlex = styled(Flex)`
    @media (max-width: 930px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`
const CardContainer = styled.div`
    display: flex;
    padding-bottom: 35px;
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

const CardHeader = styled.div`
    font-size: 18px;
    padding: 20px;
    text-align: center;
`

const CardText = styled.div`
    width: 24rem;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`

const OurTermsContainer = styled.div`
    display: flex;
    width: 34rem;
    height: 48rem;
    text-align: center;
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
    margin: 30px 15px;
`

const SinbadImage = styled.img`
    width: 100%;
    height: 100%;
`

const OurTerms = styled.div``

const Welcome = () => {
    return (
        <WelcomeContainer>
            <TextContainer>
                <HeaderText>WELCOME TO THE SINBAD SOFTWARE</HeaderText>
                <CommonText>
                    Sinbad Software LLC provides software development services and IT solutions for
                    the fintech industri. At every step of the way, we aim to give our clients the
                    power to go beyond digital boundaires and surpass their competitors in the
                    ever-evolving fintech landscape
                </CommonText>
            </TextContainer>
            <CardContainer>
                <Card direction="column" ai="center" jc="start" margin="170px 0">
                    <img src={our_service_first[0].icon} alt="icon" />
                    <CardHeader>{our_service_first[0].header}</CardHeader>
                    <CardText>{our_service_first[0].text}</CardText>
                </Card>
                <StyledFlex width="820px" wrap="wrap">
                    {our_service_other.map(({ header, text, icon }, index) => (
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
                    <HeaderText color="red" text_align="left">
                        Sinbad Software
                    </HeaderText>
                    <HeaderText font_size="28px" text_align="left">
                        Revolutionising fintech needs amazing software
                    </HeaderText>
                    <CommonText padding="15px 0 15px" text_align="left">
                        Our mission is to develop world-class fintech software solutions taht will
                        give our clients a cutting edge.
                    </CommonText>
                    <CommonText padding="0 0 20px" text_align="left">
                        With a deep undestanding of the fintech industry and a talented team, we are
                        ready to provide clients around the world with they need - from custom
                        software to mobile applications, websites, web applications, information
                        architecture, and more.
                    </CommonText>
                    <HeaderText color="red" font_size="18px" font_weight="normal" text_align="left">
                        Where others see gaps, we see an opportunity to build a powerhouse
                    </HeaderText>
                </TermsTextContainer>
                <SinbadImage src={SimbadSmile} />
                <OurTerms>Our Terms</OurTerms>
            </OurTermsContainer>
        </WelcomeContainer>
    )
}

export default Welcome
