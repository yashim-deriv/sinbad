import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'

type LayoutType = {
    children: React.ReactChild | React.ReactChild[]
}
const LayoutContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const Layout = ({ children }: LayoutType) => {
    return (
        <LayoutContainer>
            <Header />
            {children}
            <Footer />
        </LayoutContainer>
    )
}

export default Layout
