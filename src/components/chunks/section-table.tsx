import React from 'react'
import styled from 'styled-components'
import { TableDataProps } from 'types/generics'
import { Flex } from 'components/containers'
import device from 'themes/device'

/* stylelint-disable */

const Table = styled(Flex)`
    width: 100%;
    max-width: 430px;
    flex-direction: column;
    justify-content: center;
`

const TableHeader = styled.h2`
    display: flex;
    font-size: 3.6rem;
    color: var(--color-black-3);
    margin-bottom: 20px;

    @media ${device.tabletL} {
        justify-content: center;
    }
`
const TableBody = styled(Flex)`
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
`

const TableItem = styled(Flex)`
    width: fit-content;
    border-bottom: solid 1px var(--color-grey-2);
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    height: auto;

    &:nth-child(odd) {
        border-right: solid 1px var(--color-grey-2);
    }
    &:nth-last-child(-n + 2) {
        border-bottom: none;
    }

    @media ${device.mobileL} {
        width: 100%;
        border: none !important;
        border-bottom: solid 1px var(--color-grey-2) !important;
    }
`

const ItemIcon = styled.span`
    display: flex;
    width: 50px;
    height: 50px;
    margin-right: 15px;
    padding: 12px;
    background: var(--color-white);
    border-radius: 50px;
    box-shadow: 0 0 13.5px rgba(0, 0, 0, 0.15);

    img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }
`
const ItemText = styled.span`
    width: 126px;
    justify-content: flex-start;
    display: flex;
    font-size: 18px;
    font-weight: normal;
    text-align: left;
    font-family: 'Maven Pro';
    line-height: 20px;

    @media ${device.mobileL} {
        width: 100%;
    }
`

type SectionTablePros = {
    data: TableDataProps[]
    title?: string
}

const SectionTable = ({ data, title }: SectionTablePros) => {
    return (
        <Table>
            {title && <TableHeader>{title}</TableHeader>}

            <TableBody>
                {data.map(({ text, icon }, dk) => (
                    <TableItem key={dk}>
                        <ItemIcon>
                            <img src={icon} />
                        </ItemIcon>
                        <ItemText>{text}</ItemText>
                    </TableItem>
                ))}
            </TableBody>
        </Table>
    )
}

export default SectionTable
