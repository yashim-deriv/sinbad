import * as React from 'react'
import type { PageProps } from 'gatsby'
import Layout from 'common/components/layout/layout'

const JobDescription = (props: PageProps) => {
    return (
        <Layout>
            <>{props.params.id}</>
        </Layout>
    )
}

export default JobDescription
