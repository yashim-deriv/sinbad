import React from 'react'
import Footer from './footer'
import Header from './header'

type LayoutType = {
    children: React.ReactChild
}

const Layout = ({ children }: LayoutType) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
