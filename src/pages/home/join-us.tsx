import React from 'react'
import styled from 'styled-components'
import { IconProps } from '../index'
import Sinbad0 from 'images/common/carousel/sinbad-0.png'
import Sinbad1 from 'images/common/carousel/sinbad-1.png'
import Sinbad2 from 'images/common/carousel/sinbad-2.png'
import { ContactUsButton, Header, ImageContainer, Text } from 'common/components/containers'
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

const join_team = [{ icon: Sinbad0 }, { icon: Sinbad1 }, { icon: Sinbad2 }]

const JoinUs = ({ active }: IconProps) => {
    return (
        <JoinUsContainer>
            <JoinUsInfo>
                <Header color="red">Sinbad Software</Header>
                <Header font_size="28px">JOIN OUR TEAM!</Header>
                <Text>
                    To apply for this position please send us your CV with a cover letter to
                    hr@sinbad.dev
                </Text>
                <ContactUsButton>SEE OUR OPEN POSITIONS</ContactUsButton>
            </JoinUsInfo>
            <TechDashboard src={Dashboard} />
            {join_team.map(
                (current_item, index) =>
                    index == active && <ImageContainer key={active} src={current_item.icon} />,
            )}
        </JoinUsContainer>
    )
}

export default JoinUs
