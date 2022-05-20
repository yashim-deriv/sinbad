import styled from 'styled-components'
import CssGrid from '../../../containers/css-grid'
import Flex from '../../../containers/flex'
import device from 'themes/device'

export const DefaultFooter = styled.footer`
    background-color: #22365e;
    color: white;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${(props) => props.is_eu_country && '7.3rem'};
    padding-bottom: 1.6rem;

    @media ${device.mobileL} {
        padding-bottom: 6rem;

        @media ${device.tabletL} {
            padding-bottom: 0;
        }
    }
`
export const FooterGrid = styled(CssGrid)`
    width: 100%;
    grid-template-columns: 2fr;
    grid-template-areas:
        'links links'
        'disclaimer disclaimer'
        'copyright social'
        'copyright pages';

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-areas:
            'links'
            'social'
            'disclaimer'
            'pages'
            'copyright';
    }
`

export const SocialWrapper = styled.div`
    grid-area: links;
    background: #22365e;
    color: white;
    margin: 1.6rem 0;
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
    grid-area: disclaimer;
    background: #22365e;
    color: white;
`

export const PagesWrapper = styled(Flex)`
    grid-area: pages;
    align-items: center;
    color: white;
`
