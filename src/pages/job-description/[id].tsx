import * as React from 'react'
import { Helmet } from 'react-helmet'
import type { PageProps } from 'gatsby'
import Description from './description'
import JobTitle from './job-title'
import BenefitsList from './benefits'
import { positions } from './data'
import Layout from 'components/layout/layout'
import JoinUsSection from 'components/elements/join-us-section'

const JobDescription = (props: PageProps) => {
    const position = positions?.find(({ id }) => id === props.params.id)

    return (
        <Layout>
            <Helmet>
                <title>Sinbad | {position?.position}</title>
            </Helmet>
            <JobTitle position={position} />
            <Description position={position} />
            <BenefitsList />
            <JoinUsSection appearance="jobs" />
        </Layout>
    )
}

export default JobDescription
