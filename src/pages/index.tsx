import React from 'react'
import styled from 'styled-components'
import Carousel from './home/carousel'
import Welcome from './home/welcome'
import TechStack from './home/tech-stack'
import JoinUs from './home/join-us'
import Layout from 'common/components/layout/layout'

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
                <TechStack />
                <JoinUs />
            </HomeContainer>
        </Layout>
    )
}

export default Home
