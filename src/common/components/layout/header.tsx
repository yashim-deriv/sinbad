import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

type HeaderProps = {
    size?: string
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f7e3ab;
    border-radius: 5px;
    margin-bottom: 15px;
`

const StyledHeader = styled.div`
    white-space: nowrap;
    padding-left: 15px;
`

const HeaderTitle = styled.div<HeaderProps>`
    color: black;
    font-weight: ${(props) => (props.size ? props.size : 'normal')};
    font-size: 24px;
    padding-left: 15px;
`

const StyledHeaderLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const ContactUsButton = styled.button`
    width: 100px;
    height: 25px;
    color: black;
    background-color: orange;
    border-radius: 10px;
`

export const PagesWrapper = styled.div`
    color: white;
    padding-right: 15px;
`

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <StyledHeader>
                <HeaderTitle size="bold">Sinbad </HeaderTitle>
                <HeaderTitle>Software</HeaderTitle>
            </StyledHeader>

            <PagesWrapper>
                <StyledHeaderLink to="/">Home | </StyledHeaderLink>
                <StyledHeaderLink to="/careers"> Careers | </StyledHeaderLink>
                <StyledHeaderLink to="/openpositions"> Open Positions </StyledHeaderLink>
                <ContactUsButton> Contact us </ContactUsButton>
            </PagesWrapper>
        </HeaderContainer>
    )
}

export default Header
