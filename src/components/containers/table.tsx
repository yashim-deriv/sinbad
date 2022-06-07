import React from 'react'
import styled from 'styled-components'

export type TermProps = {
    index?: number
    margin?: string
    border_left?: boolean
}

type TermsServiceType = { header?: string; text: string; icon: string }

type OurServiceType = {
    first?: TermsServiceType
    other?: TermsServiceType[]
}

type OurTermsType = {
    first_column?: TermsServiceType[]
    second_column?: TermsServiceType[]
}

export type PBType = {
    our_terms?: OurTermsType
}

type DataType = {
    data?: {
        our_service?: OurServiceType
        our_terms?: OurTermsType
    }
}
const TableContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
`

const TableColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const TermImage = styled.img`
    width: 40px;
    height: 40px;
`
const TermText = styled.div`
    font-size: 14px;
    padding-left: 20px;
    font-weight: normal;
    text-align: left;
`

const Term = styled.div<TermProps>`
    display: flex;
    align-items: center;
    width: 170px;
    height: 70px;
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
                {data.our_terms.first_column.map((item, index) => (
                    <Term key={index} index={index}>
                        <TermImage src={item.icon} />
                        <TermText>{item.text}</TermText>
                    </Term>
                ))}
            </TableColumn>
            <TableColumn>
                {data.our_terms.second_column.map((item, index) => (
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
