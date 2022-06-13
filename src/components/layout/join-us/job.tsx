import React from 'react'
import styled from 'styled-components'
import { JoinUsContainer } from './home'
import { Button } from 'components/elements'
import Sinbad0 from 'pages/job-description/images/job-join-us.png'
import Sinbad from 'pages/open-positions/images/join-us-background.png'
import { Header, ImageContainer, Text } from 'components/containers/main'
import { HeaderTitle, ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'
import { contactUsAction } from 'common/utility'

const Wrapper = styled.div`
    display: flex;
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    justify-content: center;
    width: 100%;
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
    padding-right: 15px;
`

const TextContainer = styled.div`
    padding-bottom: 190px;

    @media ${device.tabletL} {
        padding-bottom: 30px;
    }
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const SinbadImage = styled(ImageContainer)`
    @media ${device.tabletL} {
        display: none;
    }
`

const JoinUsJob = () => {
    return (
        <Wrapper>
            <ContainerWrapper>
                <JoinUsContainer>
                    <SinbadImage src={Sinbad0} height="550px" width="auto" padding_bottom="100px" />
                    <JoinUsInfo>
                        <StyledHeader>
                            <HeaderTitle
                                color="var(--color-sand-4)"
                                font_family="Maven Pro Bold"
                                padding_right="10px"
                            >
                                Sinbad
                            </HeaderTitle>
                            <HeaderTitle color="var(--color-sand-4)">Software</HeaderTitle>
                        </StyledHeader>
                        <TextContainer>
                            <Header font_size="28px" text_transform="uppercase">
                                Join Our Team!
                            </Header>
                            <Text padding="20px 0">
                                To apply for this position please send us your CV with a cover
                                letter to hr@sinbad.software
                            </Text>
                            <Button label="See Our Open Positions" onClick={contactUsAction} />
                        </TextContainer>
                    </JoinUsInfo>
                </JoinUsContainer>
            </ContainerWrapper>
        </Wrapper>
    )
}

export default JoinUsJob
