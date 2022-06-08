import React from 'react'
import JoinUs from '../../components/layout/join-us'
import OpenPositions from './open-positions'
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
