import React from 'react'
import { Helmet } from 'react-helmet'
import WorkWithUs from './work-with-us'
import WhyWithUs from './why-with-us'
import PerksBenefits from './perks-benefits'
import OpenPositions from './open-positions'
import HiringProcess from './hiring-process'
import Layout from 'components/layout/layout'
import JoinUsSection from 'components/elements/join-us-section'

const Careers = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Careers</title>
            </Helmet>
            <WorkWithUs />
            <WhyWithUs />
            <PerksBenefits />
            <OpenPositions />
            <HiringProcess />
            <JoinUsSection appearance="careers" />
        </Layout>
    )
}

export default Careers
