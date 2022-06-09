import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper } from 'components/containers'
import { Button } from 'components/elements'
import device from 'themes/device'
import { getPathName, contactUsAction } from 'common/utility'
import { HeaderTitle } from 'components/containers/common/style'

/* stylelint-disable */

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--color-sand-1);
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 999;

    @media ${device.mobileL} {
        position: static;
    }
`
const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-sand-1);
    border-radius: 5px;
    width: 100%;
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
`

const StyledHeaderLink = styled(Link)`
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 30px;
    text-transform: uppercase;
    color: var(--color-black-2);
    font-weight: 900;
    text-align: left;
    font-family: 'Maven Pro Bold';
    padding-right: 30px;

    &.active,
    &:hover {
        color: var(--color-sand-4);
    }
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    color: white;

    @media ${device.tabletL} {
        a {
            display: none;
        }
    }

    @media ${device.mobileL} {
        button {
            display: none;
        }
    }
`

const Header = () => {
    const pathname = getPathName()
    return (
        <Container>
            <ContainerWrapper>
                <HeaderContainer>
                    <StyledHeader>
                        <HeaderTitle font_family="Maven Pro Bold">Sinbad</HeaderTitle>
                        <HeaderTitle padding_left="5px">Software</HeaderTitle>
                    </StyledHeader>
                    <NavWrapper>
                        <StyledHeaderLink to="/" className={pathname === '/' ? 'active' : ''}>
                            Home
                        </StyledHeaderLink>
                        <StyledHeaderLink
                            to="/careers"
                            className={pathname === '/careers' ? 'active' : ''}
                        >
                            Careers
                        </StyledHeaderLink>
                        <StyledHeaderLink
                            to="/open-positions"
                            className={pathname === '/open-positions' ? 'active' : ''}
                        >
                            Open Positions
                        </StyledHeaderLink>
                        <Button label="Contact Us" onClick={contactUsAction} />
                    </NavWrapper>
                </HeaderContainer>
            </ContainerWrapper>
        </Container>
    )
}

export default Header
