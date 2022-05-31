import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { DefaultFooter, DisclaimerWrapper, PagesWrapper } from '../containers/common/style'
import SocialWrapperComponent from './footer/social-wrapper'
import UpArrow from 'images/svg/up-arrow.svg'

const StyledFooterLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Returner = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
`

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <DefaultFooter>
            <Returner src={UpArrow} onClick={scrollTop} />
            <FooterContainer>
                <SocialWrapperComponent />
                <DisclaimerWrapper>
                    <PagesWrapper>
                        <div> © 2022 Sinbad Software LLC. All rights reserved.</div>
                        <div>
                            <StyledFooterLink to="/">Home | </StyledFooterLink>
                            <StyledFooterLink to="/careers"> Careers | </StyledFooterLink>
                            <StyledFooterLink to="/openpositions">Open Positions</StyledFooterLink>
                        </div>
                    </PagesWrapper>
                </DisclaimerWrapper>
            </FooterContainer>
        </DefaultFooter>
    )
}

export default Footer
