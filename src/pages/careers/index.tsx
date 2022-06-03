import React from 'react'
import WorkWithUs from './work-with-us'
import PerksBenefits from './perks-benefits'
import OpenPositions from './open-positions'
import HiringProcess from './hiring-process'
import Layout from 'common/components/layout/layout'
import JoinUs from 'pages/join-us'

const Careers = () => {
    return (
        <Layout>
            <WorkWithUs />
            <PerksBenefits />
            <OpenPositions />
            <HiringProcess />
            <JoinUs active={3} />
        </Layout>
    )
}

export default Careers
