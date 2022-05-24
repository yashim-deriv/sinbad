import styled from 'styled-components'
import Flex from '../../../containers/flex'
import device from 'themes/device'

export const DefaultFooter = styled.footer`
    background-color: #22365e;
    color: white;
    width: 100%;
    margin-bottom: ${(props) => props.is_eu_country && '7.3rem'};

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
    background: #22365e;
    color: white;
    display: flex;
    justify-content: space-between;

    img {
        margin-left: 1.6rem;
    }

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
    background: #22365e;
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
