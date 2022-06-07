import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, HeaderTitle } from '../containers/common/style'
import { Button } from 'components/elements'

const Container = styled.div`
    width: 100%;
    background-color: var(--color-sand-1);
`
const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-sand-1);
    max-width: 1200px;
    border-radius: 5px;
    width: 100%;
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
    padding-left: 15px;
`

/* stylelint-disable */

const StyledHeaderLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    line-height: 30px;
    text-transform: uppercase;
    color: var(--color-black-2);
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
                        <HeaderTitle font_family="Maven Pro Bold" padding_left="15px">
                            Sinbad
                        </HeaderTitle>
                        <HeaderTitle padding_left="15px">Software</HeaderTitle>
                    </StyledHeader>
                    <NavWrapper>
                        <StyledHeaderLink to="/">Home </StyledHeaderLink>
                        <StyledHeaderLink to="/careers"> Careers </StyledHeaderLink>
                        <StyledHeaderLink to="/open-positions"> Open Positions </StyledHeaderLink>
                        <Button label="Contact Us" onClick={() => alert('')} />
                    </NavWrapper>
                </HeaderContainer>
            </ContainerWrapper>
        </Container>
    )
}

export default Header
