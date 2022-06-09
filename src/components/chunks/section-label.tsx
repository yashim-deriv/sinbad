import React from 'react'
import styled from 'styled-components'
import { CSSElementProps } from 'types/generics'

const StyledSSHeader = styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
`

const StyledSSText = styled.div<CSSElementProps>`
    padding: unset;
    color: var(--color-sand-4);
    font-size: 3.8rem;
    line-height: 61px;
    font-weight: 640;
    font-family: ${(props) => props.fontFamily || 'Maven Pro'};
    padding-right: 5px;
`

const SectionLabel = () => {
    return (
        <StyledSSHeader>
            <StyledSSText fontFamily="Maven Pro Bold">Sinbad </StyledSSText>
            <StyledSSText> Software</StyledSSText>
        </StyledSSHeader>
    )
}

export default SectionLabel
