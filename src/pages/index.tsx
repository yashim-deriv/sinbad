import React from 'react'
import { Helmet } from 'react-helmet'
import Carousel from './home/carousel'
import Welcome from './home/welcome'
import { OurTerms, TechStack } from './home'
import Layout from 'components/layout/layout'
import JoinUsSection from 'components/elements/join-us-section'

const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Home</title>
            </Helmet>
            <Carousel />
            <Welcome />
            <OurTerms />
            <TechStack />
            <JoinUsSection appearance="home" />
        </Layout>
    )
}

export default Home
