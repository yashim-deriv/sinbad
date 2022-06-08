import * as React from 'react'
import type { PageProps } from 'gatsby'
import Description from './description'
import JobTitle from './job-title'
import BenefitsList from './benefits'
import JoinUs from './join-us'
import Layout from 'components/layout/layout'

const JobDescription = (props: PageProps) => {
    return (
        <Layout>
            <>
                <JobTitle />
                <Description />
                <BenefitsList />
                <JoinUs />
                {props.params.id}
            </>
        </Layout>
    )
}

export default JobDescription
