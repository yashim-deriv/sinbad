import styled, { css } from 'styled-components'
import device, { size } from 'themes/device'

type FlexBoxProps = {
    width?: string
    height?: string
    min_height?: string
    max_width?: string
    position?: string
    background?: string
    wrap?: string
    jc?: string
    fw?: string
    bg?: string
    fd?: string
    ai?: string
    direction?: string
    tablet_direction?: string
    tablet_ai?: string
    tablet_jc?: string
    tablet_fw?: string
}

const flexStyles = ({ jc, ai, fw, fd }) => css`
    justify-content: ${jc};
    align-items: ${ai};
    flex-wrap: ${fw};
    flex-direction: ${fd};
`

const mediaqueries = Object.keys(size)
    .sort(function (a, b) {
        return size[b] - size[a]
    })
    .reduce((accumulator, label) => {
        accumulator[label] = (...args) => css`
            @media (max-width: ${size[label]}px) {
                ${css(...args)};
            }
        `
        return accumulator
    }, {})

const generateResponsiveStyles = (stylesGenerator) => (props) => {
    return Object.keys(mediaqueries).reduce((rules, mq) => {
        if (!props[mq]) return rules
        const styles = mediaqueries[mq]`        
        ${stylesGenerator(props[mq])}
        `
        return [...rules, styles]
    }, [])
}

const responsiveStyles = generateResponsiveStyles(flexStyles)

export const Box = styled.div<FlexBoxProps>`
    width: ${(props) => (props.width ? props.width : '')};
    height: ${(props) => (props.height ? props.height : '')};
    min-height: ${(props) => (props.min_height ? props.min_height : '')};
    max-width: ${(props) => (props.max_width ? props.max_width : '')};
    position: ${(props) => (props.position ? props.position : '')};
    background: ${(props) => (props.background || props.bg ? props.background || props.bg : '')};
    ${responsiveStyles}
`

const Flex = styled(Box)<FlexBoxProps>`
    display: flex;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '100%')};
    flex-wrap: ${(props) => (props.wrap || props.fw ? props.wrap || props.fw : '')};
    justify-content: ${(props) => (props.jc ? props.jc : 'center')};
    align-items: ${(props) => (props.ai ? props.ai : '')};
    flex-direction: ${(props) => (props.direction || props.fd ? props.direction || props.fd : '')};

    @media ${device.tablet} {
        flex-direction: ${(props) => (props.tablet_direction ? props.tablet_direction : '')};
        align-items: ${(props) => (props.tablet_ai ? props.tablet_ai : '')};
        justify-content: ${(props) => (props.tablet_jc ? props.tablet_jc : '')};
        flex-wrap: ${(props) => props.tablet_fw};
    }

    ${responsiveStyles}
`

export default Flex
