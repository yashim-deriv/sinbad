import styled from 'styled-components'
import Flex from 'common/components/containers/flex'
import device from 'themes/device'

export const DefaultFooter = styled.footer`
    background-color: #0e2432;
    color: white;
    width: 100%;

    @media ${device.mobileL} {
        padding-bottom: 6rem;

        @media ${device.tabletL} {
            padding-bottom: 0;
        }
    }
`

export const SocialWrapper = styled.div`
    align-items: center;
    height: 175px;
    background: #0e2432;
    color: white;
    display: flex;
    justify-content: space-between;

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        margin: 3rem 0 1rem;

        a:first-child {
            img {
                margin-left: 0;
            }
        }
    }
`

export const DisclaimerWrapper = styled.div`
    height: 100px;
    background: #0e2432;
    color: white;
    border-top: 1px solid gray;
    display: flex;
`

export const PagesWrapper = styled(Flex)`
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    width: 1000px;
`

export const ContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 1440px) {
        width: 90%;
    }
`
