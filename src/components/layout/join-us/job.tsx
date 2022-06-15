import React from 'react'
import styled from 'styled-components'
import { JoinUsContainer, StyledHeader, StyledText } from './home'
import { Button } from 'components/elements'
import { JoinUsImageContainer } from 'components/containers/main'
import Sinbad0 from 'images/common/jd/job-join-us.png'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { ContainerWrapper } from 'components/containers/common/style'
import { openPositionActions } from 'common/utility'
import { Banner } from 'images/common/jd'
import device from 'themes/device'
import { SectionLabel } from 'components/chunks'

const Wrapper = styled.div`
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    width: 100%;
`

const JoinUsWrapper = styled(JoinUsContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: url(${Banner});
    background-size: 47.5% 65%;
    width: 100%;
    height: 760px;
`

const TextContainer = styled.div`
    padding-bottom: 75px;

    @media ${device.tabletL} {
        padding-bottom: 20px;
    }
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const JoinUsJob = () => {
    return (
        <Wrapper>
            <JoinUsWrapper>
                <ContainerWrapper>
                    <JoinUsImageContainer
                        src={Sinbad0}
                        padding_bottom="unset"
                        width="600px"
                        mobile_pb="unset"
                    />
                    <JoinUsInfo>
                        <SectionLabel />
                        <TextContainer>
                            <StyledHeader>Join Our Team!</StyledHeader>
                            <StyledText>
                                To apply for this position please send us your CV with a cover
                                letter to hr@sinbad.software
                            </StyledText>
                            <Button label="Apply for this job" onClick={openPositionActions} />
                        </TextContainer>
                    </JoinUsInfo>
                </ContainerWrapper>
            </JoinUsWrapper>
        </Wrapper>
    )
}

export default JoinUsJob
