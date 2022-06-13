import React from 'react'
import WorkWithUs from './work-with-us'
import WhyWithUs from './why-with-us'
import PerksBenefits from './perks-benefits'
import OpenPositions from './open-positions'
import HiringProcess from './hiring-process'
import Layout from 'components/layout/layout'
import JoinUs from 'components/layout/join-us'

const Careers = () => {
    return (
        <Layout>
            <WorkWithUs />
            <WhyWithUs />
            <PerksBenefits />
            <OpenPositions />
            <HiringProcess />
            <JoinUs appearance="careers" />
        </Layout>
    )
}

export default Careers
