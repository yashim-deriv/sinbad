import React from 'react'
import styled from 'styled-components'

export type TermProps = {
    index?: number
    margin?: string
    font_family?: string
    border_left?: boolean
}

type TermsType = { header?: string; text?: string; icon?: string }

export type OurTermsType = {
    first_column?: TermsType[]
    second_column?: TermsType[]
    first?: TermsType
    other?: TermsType[]
}

type DataType = {
    data?: OurTermsType
}
const TableContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 50px;
`

const TableColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const TermImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    filter: drop-shadow(0 0 13.5px rgba(0, 0, 0, 0.15));
`
const TermText = styled.div<TermProps>`
    font-size: 18px;
    line-height: 22px;
    color: var(--color-black-3);
    font-weight: 480;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
    padding-left: 10px;
`

const Term = styled.div<TermProps>`
    display: flex;
    align-items: center;
    max-width: 210px;
    max-height: 90px;
    padding: 10px;
    border-top: ${(props) =>
        props.index === 0 ? 'unset' : props.index === 4 ? 'unset' : '1px solid gray'};
    border-bottom: ${(props) =>
        props.index === 3 ? 'unset' : props.index === 7 ? 'unset' : '1px solid gray'};
    border-left: ${(props) => (props.border_left ? '1px solid gray' : 'unset')};
`

const Table = ({ data }: DataType) => {
    return (
        <TableContainer>
            <TableColumn>
                {data.first_column.map((item, index) => (
                    <Term key={index} index={index}>
                        <TermImage src={item.icon} />
                        <TermText>{item.text}</TermText>
                    </Term>
                ))}
            </TableColumn>
            <TableColumn>
                {data.second_column.map((item, index) => (
                    <Term key={index} index={index} border_left={true}>
                        <TermImage src={item.icon} />
                        <TermText>{item.text}</TermText>
                    </Term>
                ))}
            </TableColumn>
        </TableContainer>
    )
}

export default Table
