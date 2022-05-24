import React from 'react'
import styled from 'styled-components'
import Carousel from './carousel'
import Welcome from './welcome'
import Layout from 'common/components/layout/layout'

const TechStackContainer = styled.div`
    width: 100%;
    height: 200px;
`
const JoinUsContainer = styled.div`
    width: 100%;
    height: 200px;
`
const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Home = () => {
    return (
        <Layout>
            <HomeContainer>
                <Carousel />
                <Welcome />

                <TechStackContainer>TechStack</TechStackContainer>
                <JoinUsContainer>JoinUs</JoinUsContainer>
            </HomeContainer>
        </Layout>
    )
}

export default Home
