import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { ContactUsButton } from '../containers/main'
import { ContainerWrapper } from '../containers/common/style'

type HeaderProps = {
    font_family?: string
}

const Container = styled.div`
    width: 100%;
    background-color: #fef5e6;
`
const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fef5e6;
    max-width: 1200px;
    border-radius: 5px;
    width: 100%;
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
    padding-left: 15px;
`

const HeaderTitle = styled.div<HeaderProps>`
    font-size: 34px;
    line-height: 58px;
    color: #2a2a2a;
    padding-left: 15px;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
`
/* stylelint-disable */

const StyledHeaderLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    line-height: 30px;
    text-transform: uppercase;
    color: #242424;
    font-weight: 900;
    text-align: left;
    font-family: 'Maven Pro Bold';
    padding-right: 30px;
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    color: white;
    padding-right: 65px;
`

const Header = () => {
    return (
        <Container>
            <ContainerWrapper>
                <HeaderContainer>
                    <StyledHeader>
                        <HeaderTitle font_family="Maven Pro Bold">Sinbad</HeaderTitle>
                        <HeaderTitle>Software</HeaderTitle>
                    </StyledHeader>
                    <NavWrapper>
                        <StyledHeaderLink to="/">Home </StyledHeaderLink>
                        <StyledHeaderLink to="/careers"> Careers </StyledHeaderLink>
                        <StyledHeaderLink to="/open-positions"> Open Positions </StyledHeaderLink>
                        <ContactUsButton />
                    </NavWrapper>
                </HeaderContainer>
            </ContainerWrapper>
        </Container>
    )
}

export default Header
