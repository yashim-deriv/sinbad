import React from 'react'
import OpenPositions from './open-positions'
import JoinUs from 'components/layout/join-us'
import Layout from 'components/layout/layout'

const Positions = () => {
    return (
        <Layout>
            <OpenPositions />
            <JoinUs appearance="openPositions" />
        </Layout>
    )
}

export default Positions
