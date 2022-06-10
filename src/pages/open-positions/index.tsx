import React from 'react'
import { Helmet } from 'react-helmet'
import OpenPositions from './open-positions'
import JoinUs from 'components/layout/join-us'
import Layout from 'components/layout/layout'

const Positions = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Open Positions</title>
            </Helmet>
            <OpenPositions />
            <JoinUs appearance="openPositions" />
        </Layout>
    )
}

export default Positions
