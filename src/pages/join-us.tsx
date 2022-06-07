import React from 'react'
import styled from 'styled-components'
import { IconProps } from './index'
import { Sinbad0, Sinbad1, Sinbad2, Sinbad3 } from 'images/common/careers'
import { SeeOurPositions, Header, ImageContainer, Text } from 'common/components/containers'
import Dashboard from 'images/common/dashboard.png'

const JoinUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background-color: var(--color-sand-3);
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

const join_team = [{ icon: Sinbad0 }, { icon: Sinbad1 }, { icon: Sinbad2 }, { icon: Sinbad3 }]

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
                <SeeOurPositions />
            </JoinUsInfo>
            <ImageContainer src={Dashboard} width="600px" height="400px" />
            {join_team.map(
                (current_item, index) =>
                    index == active && <ImageContainer key={active} src={current_item.icon} />,
            )}
        </JoinUsContainer>
    )
}

export default JoinUs
