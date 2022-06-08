import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, Flex, Header } from 'components/containers'
import { Challenges, Team, Requirements, GoodToHave } from 'images/common/jd'

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const DescriptionContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledHeader = styled(Header)`
    text-transform: uppercase;
    color: var(--color-sand-4);
    font-size: 3.8rem;
    line-height: 50px;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
`

const HeaderImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 30px;
`

const JDContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 60px;
`

const Card = styled(Flex)`
    display: flex;
    max-width: 1200px;
    min-height: 243px;
    margin: 20px 0;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    border-radius: 4px;
    justify-content: center;
`

const StyledImg = styled.img`
    padding-right: 50px;
    align-items: flex-end;
`

const StyledList = styled.ul`
    list-style: disc;
    padding-left: 75px;
`
const StyledListItem = styled.li<{ pb?: string }>`
    color: var(--color-black-3);
    padding-left: 5px;
    max-width: 850px;
    padding-bottom: ${(props) => props.pb || 'unset'};
`

const StyledText = styled.div<{ font_family?: string; padding?: string }>`
    font-size: 1.9rem;
    line-height: 43px;
    color: var(--color-black-2);
    font-weight: 320;
    text-align: left;
    font-family: ${(props) => props.font_family || 'Poppins'};
    padding: ${(props) => props.padding || 'unset'};
`

const Description = () => {
    return (
        <DescriptionContainer>
            <DescriptionContainerWrapper>
                <JDContainer>
                    <Card ai="center">
                        <StyledText padding="15px 75px ">
                            You’ll build powerful front-end systems with an improved user experience
                            for our clients worldwide. You‘ll advocate for clients’ needs in the
                            design and development of our applications, especially when implementing
                            new products and features.
                        </StyledText>
                    </Card>

                    <Card direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Your challenges</StyledHeader>
                            <StyledImg src={Challenges} />
                        </HeaderImageContainer>
                        <StyledList>
                            <StyledListItem>
                                <StyledText>
                                    Find the balance between functional and aesthetic design, and
                                    create engaging user interfaces for all our products.
                                </StyledText>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledText>
                                    Ensure our products are accessible across all platforms by
                                    optimising them for speed, scalability, and usability.
                                </StyledText>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledText>
                                    Resolve web-development challenges by employing reusable
                                    components and the latest front-end frameworks.
                                </StyledText>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledText>
                                    Offer our clients the best user experience by performing
                                    automated tests, troubleshooting issues, and making
                                    improvements.
                                </StyledText>
                            </StyledListItem>
                            <StyledListItem pb="50px">
                                <StyledText>
                                    Maintain clear and detailed technical design documentation
                                    according to our style guide.
                                </StyledText>
                            </StyledListItem>
                        </StyledList>
                    </Card>
                    <Card direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Our Team</StyledHeader>
                            <StyledImg src={Team} />
                        </HeaderImageContainer>
                        <StyledText padding="15px 75px 50px">
                            You’ll be part of our Front-end team, where we build the client-side of
                            our web applications by translating UI/UX design wireframes into a
                            user-centric web experience. We advocate for our clients’ needs, and we
                            collaborate with other teams to implement an engaging user interface for
                            our trading platforms.
                        </StyledText>
                    </Card>
                    <Card direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Requirements</StyledHeader>
                            <StyledImg src={Requirements} />
                        </HeaderImageContainer>
                        <StyledList>
                            <StyledListItem>
                                <StyledText>
                                    Hands-on experience with JavaScript, HTML, and CSS
                                </StyledText>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledText>
                                    Good grasp of diverse testing and debugging methods
                                </StyledText>
                            </StyledListItem>
                            <StyledListItem pb="50px">
                                <StyledText>
                                    Excellent spoken and written English communication skills
                                </StyledText>
                            </StyledListItem>
                        </StyledList>
                    </Card>
                    <Card direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>What’s good to ahve</StyledHeader>
                            <StyledImg src={GoodToHave} />
                        </HeaderImageContainer>
                        <StyledList>
                            <StyledListItem>
                                <StyledText>Good grasp of UI/UX design processes</StyledText>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledText>Experience in working with React library</StyledText>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledText>Experience with Git</StyledText>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledText>
                                    Working experience in open-source platforms like Linux
                                </StyledText>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledText>
                                    Strong knowledge of technologies such as Mobx, Gatsby,
                                    WebSocket, and styled-components
                                </StyledText>
                            </StyledListItem>
                            <StyledListItem pb="50px">
                                <StyledText>Good understanding of back-end technologies</StyledText>
                            </StyledListItem>
                        </StyledList>
                    </Card>
                </JDContainer>
            </DescriptionContainerWrapper>
        </DescriptionContainer>
    )
}

export default Description
