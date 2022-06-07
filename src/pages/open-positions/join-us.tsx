import React from 'react'
import styled from 'styled-components'
import Sinbad0 from 'images/common/sinbad-positions-0.png'
import { Header, ImageContainer, Text } from 'common/components/containers/main'
import Dashboard from 'images/common/dashboard.png'

const JoinUsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 400px;
    background-color: var(--color-sand-3);
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 240px;
`

const TechDashboard = styled.img`
    width: 600px;
    height: 400px;
    padding: 20px 0;
`

const JoinUs = () => {
    return (
        <JoinUsContainer>
            <>
                <ImageContainer src={Sinbad0} />
                <TechDashboard src={Dashboard} />
            </>
            <JoinUsInfo>
                <Header color="red" padding="5px 0">
                    Sinbad Software
                </Header>

                <Header font_size="28px">JOIN OUR TEAM!</Header>
                <Text padding="5px 0">
                    To apply for this position please send us your CV with a cover letter to
                    hr@sinbad.dev
                </Text>
            </JoinUsInfo>
        </JoinUsContainer>
    )
}

export default JoinUs
