import * as React from 'react'
import type { PageProps } from 'gatsby'
import Description from './description'
import JobTitle from './job-title'
import BenefitsList from './benefits'
import Layout from 'components/layout/layout'
import JoinUs from 'components/layout/join-us'
import { positions } from 'pages/open-positions/open-positions'

const JobDescription = (props: PageProps) => {
    const position = positions.find(({ id }) => id === props.params.id)

    return (
        <Layout>
            <JobTitle position={position} />
            <Description />
            <BenefitsList />
            <JoinUs appearance="job" />
        </Layout>
    )
}

export default JobDescription
