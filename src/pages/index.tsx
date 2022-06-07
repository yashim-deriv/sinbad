import * as React from 'react'
import { useState } from 'react'
import Carousel from './home/carousel'
import Welcome from './home/welcome'
import TechStack from './home/tech-stack'
import JoinUs from './join-us'
import Layout from 'components/layout/layout'

export type IconProps = {
    active?: number
    setActive?: (number) => void
}

const Home = () => {
    const [active, setActive] = useState(0)

    return (
        <Layout>
            <Carousel active={active} setActive={setActive} />
            <Welcome active={active} />
            <TechStack />
            <JoinUs active={active} />
        </Layout>
    )
}

export default Home
