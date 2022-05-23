import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { DefaultFooter, DisclaimerWrapper, FooterGrid, PagesWrapper } from './footer/common/style'
import SocialWrapperComponent from './footer/social-wrapper'

const StyledFooterLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const Footer = () => {
    return (
        <DefaultFooter>
            <Container>
                <FooterGrid>
                    <SocialWrapperComponent />
                    <DisclaimerWrapper>
                        2022 Sinbad Software LLC. All rights reserved.
                    </DisclaimerWrapper>
                    <PagesWrapper>
                        <StyledFooterLink to="/">Home | </StyledFooterLink>
                        <StyledFooterLink to="/careers"> Careers | </StyledFooterLink>
                        <StyledFooterLink to="/openpositions"> Open Positions </StyledFooterLink>
                    </PagesWrapper>
                </FooterGrid>
            </Container>
        </DefaultFooter>
    )
}

export default Footer
