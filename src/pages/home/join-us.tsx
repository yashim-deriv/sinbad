import React from 'react'
import styled from 'styled-components'
import { ContactUsButton, Header, Text } from 'common/components/layout/footer/common/text'
import Dashboard from 'images/common/dashboard.png'

const JoinUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    background-color: #f7cd43;
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: center;
    align-items: start;
    height: 300px;
    padding: 50px 40px 0;
`

const TechDashboard = styled.img`
    width: 600px;
    height: 400px;
    padding: 20px 0;
`

const JoinUs = () => {
    return (
        <JoinUsContainer>
            <JoinUsInfo>
                <Header color="red">Sinbad Software</Header>
                <Header font_size="28px">JOIN OUR TEAM!</Header>
                <Text>
                    Is your dream to build great products using leading technologies? Join Sinbad
                    Software, where creativity, talent, and a passion for challenges come together
                </Text>
                <ContactUsButton>SEE OUR OPEN POSITIONS</ContactUsButton>
            </JoinUsInfo>
            <TechDashboard src={Dashboard} />
        </JoinUsContainer>
    )
}

export default JoinUs
