import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { ContainerWrapper } from 'components/containers/common/style'

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-sand-1);
    min-height: 1000px;
`

const DescriptionContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const PageNotFound = () => {
    return (
        <Layout>
            <DescriptionContainer>
                <DescriptionContainerWrapper>404</DescriptionContainerWrapper>
            </DescriptionContainer>
        </Layout>
    )
}

export default PageNotFound
