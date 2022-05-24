import React from 'react'
import styled from 'styled-components'
import { ContactUsButton, HeaderText, CommonText } from 'common/components/containers/common'
import Dashboard from 'images/common/dashboard.png'

const JoinUsContainer = styled.div`
    display: flex;
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
    width: 100%;
    height: 300px;
    padding: 50px 40px 0 80px;
`

const TechDashboard = styled.img`
    width: 600px;
    height: 400px;
    padding: 0 40px;
`

const JoinUs = () => {
    return (
        <JoinUsContainer>
            <JoinUsInfo>
                <HeaderText color="red">Sinbad Software</HeaderText>
                <HeaderText font_size="28px">JOIN OUR TEAM!</HeaderText>
                <CommonText>
                    Is your dream to build great products using leading technologies? Join Sinbad
                    Software, where creativity, talent, and a passion for challenges come together
                </CommonText>
                <ContactUsButton>SEE OUR OPEN POSITIONS</ContactUsButton>
            </JoinUsInfo>
            <TechDashboard src={Dashboard} />
        </JoinUsContainer>
    )
}

export default JoinUs
