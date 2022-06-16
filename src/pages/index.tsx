import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import Carousel from './home/carousel'
import Welcome from './home/welcome'
import { OurTerms, TechStack } from './home'
import Layout from 'components/layout/layout'
import JoinUsSection from 'components/elements/join-us-section'

export type IconProps = {
    active?: number
    setActive?: (number) => void
}

const Home = () => {
    const [active, setActive] = useState(0)

    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Home</title>
            </Helmet>
            <Carousel active={active} setActive={setActive} />
            <Welcome />
            <OurTerms />
            <TechStack />
            <JoinUsSection appearance="home" />
        </Layout>
    )
}

export default Home
