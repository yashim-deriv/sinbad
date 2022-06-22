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
    icon?: string | React.ReactElement
}

type DataType = {
    data?: TableType[]
    text?: string
}

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
    max-width: 640px;
    width: 100%;

    @media (max-width: 620px) {
        justify-content: center;
    }
    @media ${device.mobileL} {
        padding-right: 0px;
    }
`

const TermHeaderText = styled.div<TermProps>`
    font-size: 3.8rem;
    line-height: 53px;
    color: var(--color-black-3);
    font-weight: bold;
    text-align: left;
    padding-bottom: 20px;

    @media ${device.laptopM} {
        font-size: 3.4rem;
    }
    @media ${device.tabletL} {
        font-size: 3rem;
    }
`

const TermText = styled.div<TermProps>`
    max-width: 220px;
    font-size: 1.8rem;
    line-height: 22px;
    color: var(--color-black-3);
    font-weight: bold;
    text-align: left;
    padding: 0 5px;

    @media ${device.tablet} {
        font-size: 1.5rem;
    }
`

const border = [0, 1, 2, 4, 5, 6]
const Term = styled.div<TermProps>`
    max-width: 320px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-bottom: ${(props) =>
        border.some((num) => num == props.index) ? '1px solid rgb(168, 168, 168, 0.5)' : 'unset'};

    @media ${device.tabletL} {
        height: 110px;
    }
    @media ${device.tabletS} {
        height: 100px;
    }
`

const ColumnContainer = styled.div`
    display: flex;
    fled-direction: row;
`

const Column = styled.div<TermProps>`
    display: flex;
    flex-direction: column;
    border-left: ${(props) => (props.border_left ? '1px solid rgb(168, 168, 168, 0.5)' : 'unset')};
`

const Table = ({ data, text }: DataType) => {
    return (
        <TableContainer>
            <TermHeaderText>{text}</TermHeaderText>
            <ColumnContainer>
                <Column>
                    {data.map(
                        (item, index) =>
                            index < 4 && (
                                <Term key={index} index={index}>
                                    {item.icon}
                                    <TermText>{item.text}</TermText>
                                </Term>
                            ),
                    )}
                </Column>
                <Column border_left>
                    {data.map(
                        (item, index) =>
                            index > 3 && (
                                <Term key={index} index={index}>
                                    {item.icon}
                                    <TermText>{item.text}</TermText>
                                </Term>
                            ),
                    )}
                </Column>
            </ColumnContainer>
        </TableContainer>
    )
}

export default Table
