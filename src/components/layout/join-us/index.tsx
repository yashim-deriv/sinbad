import React from 'react'
import JoinUsHome from 'components/layout/join-us/home'
import JoinUsCareers from 'components/layout/join-us/career'
import JoinUsOpenPositions from 'components/layout/join-us/open-position'
import JoinUsJob from 'components/layout/join-us/job'
import PageNotFound from 'pages/404'

type JoinUsProps = {
    appearance: string
}

const Appearance = {
    home: 'home',
    careers: 'careers',
    openPositions: 'openPositions',
    job: 'job',
}

const JoinUs = ({ appearance }: JoinUsProps) => {
    switch (appearance) {
        case Appearance.home:
            return <JoinUsHome />
        case Appearance.careers:
            return <JoinUsCareers />
        case Appearance.openPositions:
            return <JoinUsOpenPositions />
        case Appearance.job:
            return <JoinUsJob />
        default:
            <PageNotFound />
    }
}

export default JoinUs
