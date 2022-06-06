import React from 'react'
import styled from 'styled-components'
import { Flex, Header, ImageContainer, Text } from 'common/components/containers'
import Dashboard from 'images/common/dashboard.png'
import Sinbad0 from 'images/common/careers/sinbad-0.png'
import Random from 'images/svg/random.svg'

const Images = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledHeader = styled(Header)`
    text-transform: uppercase;
`

const HeaderImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const JDContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 60px;
`

const Card = styled(Flex)`
    max-width: 1024px;
    margin: 20px 0;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    border-radius: 4px;
    justify-content: center;
`

const data = [{ header: 'Yor challenges', topic1: '' }]

const Description = () => {
    return (
        <DescriptionContainer>
            <StyledHeader padding="40px 0">Front-end developer</StyledHeader>
            <Images>
                <ImageContainer src={Dashboard} />
                <ImageContainer src={Sinbad0} />
            </Images>
            <JDContainer>
                <Card>
                    <Text text_align="center" width="900px">
                        Some data with some text
                    </Text>
                </Card>
                <Card direction="column">
                    <HeaderImageContainer>
                        <StyledHeader>Your challenges</StyledHeader>
                        <ImageContainer src={Random} width="80px" height="80px" />
                    </HeaderImageContainer>
                    <Text text_align="center" width="900px">
                        Some data with some text
                    </Text>
                </Card>
            </JDContainer>
        </DescriptionContainer>
    )
}

export default Description
