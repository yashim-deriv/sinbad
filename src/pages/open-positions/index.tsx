import React from 'react'
import { Helmet } from 'react-helmet'
import OpenPositions from './open-positions'
import JoinUsSection from 'components/elements/join-us-section'
import Layout from 'components/layout/layout'

const Positions = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Open Positions</title>
            </Helmet>
            <OpenPositions />
            <JoinUsSection appearance="open_positions" />
        </Layout>
    )
}

export default Positions
