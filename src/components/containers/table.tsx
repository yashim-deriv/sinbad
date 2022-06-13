import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'

/* stylelint-disable */

export type TermProps = {
    index?: number
    margin?: string
    font_family?: string
    border_left?: boolean
}

type TermsType = { header?: string; text?: string; icon?: string }

export type TableType = {
    first_column?: TermsType[]
    second_column?: TermsType[]
    first?: TermsType
    other?: TermsType[]
    header?: string
    text?: string
    icon?: string
}

type DataType = {
    data?: TableType[]
}

const TableContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media ${device.mobileL} {
        padding-right: 0px;
    }
`

const TermImage = styled.img`
    max-width: 100px;
    max-height: 100px;
    filter: drop-shadow(0 0 13.5px rgba(0, 0, 0, 0.15));
`
const TermText = styled.div<TermProps>`
    font-size: 1.8rem;
    line-height: 22px;
    color: var(--color-black-3);
    font-weight: 480;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding-left: 10px;
`

const Term = styled.div<TermProps>`
    max-width: 235px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-top: ${(props) =>
        props.index === 0 ? 'unset' : props.index < 2 ? 'unset' : '1px solid gray'};
    border-bottom: ${(props) => (props.index > 5 ? 'unset' : '1px solid gray')};
    border-left: ${(props) => (props.index % 2 ? '1px solid gray' : 'unset')};
`

const Table = ({ data }: DataType) => {
    return (
        <TableContainer>
            {data.map((item, index) => (
                <Term key={index} index={index}>
                    <TermImage src={item.icon} />
                    <TermText>{item.text}</TermText>
                </Term>
            ))}
        </TableContainer>
    )
}

export default Table
