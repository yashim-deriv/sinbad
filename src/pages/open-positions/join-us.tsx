import React from 'react'
import styled from 'styled-components'
import Sinbad0 from 'pages/open-positions/images/join-team.png'
import Sinbad from 'pages/open-positions/images/join-us-background.png'
import { Header, ImageContainer, Text } from 'components/containers/main'
import { HeaderTitle } from 'components/containers/common/style'

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
    padding-right: 15px;
`

const JoinUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
`
const TextContainer = styled.div`
    padding-bottom: 190px;
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 240px;
`

const JoinUs = () => {
    return (
        <>
            <JoinUsContainer>
                <>
                    <ImageContainer src={Sinbad0} height="550px" padding_bottom="100px" />
                </>
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
                        <Header font_size="28px">JOIN OUR TEAM!</Header>
                        <Text padding="20px 0">
                            To apply for this position please send us your CV with a cover letter to
                            hr@sinbad.dev
                        </Text>
                    </TextContainer>
                </JoinUsInfo>
            </JoinUsContainer>
        </>
    )
}

export default JoinUs
