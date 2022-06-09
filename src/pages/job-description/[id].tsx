import * as React from 'react'
import type { PageProps } from 'gatsby'
import Description from './description'
import JobTitle from './job-title'
import BenefitsList from './benefits'
import Layout from 'components/layout/layout'
import JoinUs from 'components/layout/join-us'

const JobDescription = (props: PageProps) => {
    return (
        <Layout>
            <>
                <JobTitle />
                <Description />
                <BenefitsList />
                <JoinUs appearance="job" />
                {props.params.id}
            </>
        </Layout>
    )
}

export default JobDescription
