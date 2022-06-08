import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { DefaultFooter, DisclaimerWrapper, PagesWrapper } from '../containers/common/style'
import SocialWrapperComponent from './footer/social-wrapper'
import UpArrow from 'images/svg/up-arrow.svg'

const StyledFooterLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
    line-height: 36px;
    font-weight: 400;
    text-align: left;
`
const StyledFooterText = styled.div`
    font-size: 1.6rem;
`

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Returner = styled.img`
    width: 40px;
    height: 40px;
    position: relative;
    top: -20px;
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
                        <StyledFooterText>
                            © 2022 Sinbad Software LLC. All rights reserved.
                        </StyledFooterText>
                        <div>
                            <StyledFooterLink to="/">Home | </StyledFooterLink>
                            <StyledFooterLink to="/careers"> Careers | </StyledFooterLink>
                            <StyledFooterLink to="/open-positions">Open Positions</StyledFooterLink>
                        </div>
                    </PagesWrapper>
                </DisclaimerWrapper>
            </FooterContainer>
        </DefaultFooter>
    )
}

export default Footer
