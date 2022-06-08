import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, Flex, Header, Text } from 'components/containers'
import Challenges from 'images/common/jd/challenges.png'
import Team from 'images/common/jd/team.png'
import Requirement from 'images/common/jd/requirements.png'
import GootToHave from 'images/common/jd/good-to-have.png'

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-blue-2);
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
    max-width: 1280px;
    margin: 20px 0;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    border-radius: 4px;
    justify-content: center;
`

const StyledImg = styled.img`
    padding-right: 50px;
`

const StyledList = styled.ul`
    list-style: disc;
    padding-left: 75px;
`
const StyledListItem = styled.li`
    color: var(--color-black-3);
    padding-left: 5px;
    max-width: 850px;
`

const YourChallenges = styled.div``
const Requirements = styled.div``
const GoodToHave = styled.div``

const Description = () => {
    return (
        <DescriptionContainer>
            <DescriptionContainerWrapper>
                <JDContainer>
                    <Card>
                        <Text width="unset" padding="15px 75px ">
                            You’ll build powerful front-end systems with an improved user experience
                            for our clients worldwide. You‘ll advocate for clients’ needs in the
                            design and development of our applications, especially when implementing
                            new products and features.
                        </Text>
                    </Card>
                    <YourChallenges>
                        <Card direction="column">
                            <HeaderImageContainer>
                                <StyledHeader>Your challenges</StyledHeader>
                                <StyledImg src={Challenges} />
                            </HeaderImageContainer>
                            <StyledList>
                                <StyledListItem>
                                    <Text width="unset">
                                        Find the balance between functional and aesthetic design,
                                        and create engaging user interfaces for all our products.
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Ensure our products are accessible across all platforms by
                                        optimising them for speed, scalability, and usability.
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Resolve web-development challenges by employing reusable
                                        components and the latest front-end frameworks.
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Offer our clients the best user experience by performing
                                        automated tests, troubleshooting issues, and making
                                        improvements.
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Maintain clear and detailed technical design documentation
                                        according to our style guide.
                                    </Text>
                                </StyledListItem>
                            </StyledList>
                        </Card>
                    </YourChallenges>
                    <Card direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Our Team</StyledHeader>
                            <StyledImg src={Team} />
                        </HeaderImageContainer>

                        <Text width="unset" padding="15px 75px">
                            You’ll be part of our Front-end team, where we build the client-side of
                            our web applications by translating UI/UX design wireframes into a
                            user-centric web experience. We advocate for our clients’ needs, and we
                            collaborate with other teams to implement an engaging user interface for
                            our trading platforms.
                        </Text>
                    </Card>
                    <Requirements>
                        <Card direction="column">
                            <HeaderImageContainer>
                                <StyledHeader>Requirements</StyledHeader>
                                <StyledImg src={Requirement} />
                            </HeaderImageContainer>
                            <StyledList>
                                <StyledListItem>
                                    <Text width="unset">
                                        Hands-on experience with JavaScript, HTML, and CSS
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Good grasp of diverse testing and debugging methods
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Excellent spoken and written English communication skills
                                    </Text>
                                </StyledListItem>
                            </StyledList>
                        </Card>
                    </Requirements>
                    <GoodToHave>
                        <Card direction="column">
                            <HeaderImageContainer>
                                <StyledHeader>What’s good to ahve</StyledHeader>
                                <StyledImg src={GootToHave} />
                            </HeaderImageContainer>
                            <StyledList>
                                <StyledListItem>
                                    <Text width="unset">Good grasp of UI/UX design processes</Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Experience in working with React library
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">Experience with Git</Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Working experience in open-source platforms like Linux
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Strong knowledge of technologies such as Mobx, Gatsby,
                                        WebSocket, and styled-components
                                    </Text>
                                </StyledListItem>
                                <StyledListItem>
                                    <Text width="unset">
                                        Good understanding of back-end technologies
                                    </Text>
                                </StyledListItem>
                            </StyledList>
                        </Card>
                    </GoodToHave>
                </JDContainer>
            </DescriptionContainerWrapper>
        </DescriptionContainer>
    )
}

export default Description
