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
    text?: string
}

const TableContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-content: center;
    max-width: 599px;
    width: 100%;

    @media ${device.bp1060} {
        max-width: 530px;
    }
    @media ${device.laptopM} {
        max-width: 410px;
    }
    @media ${device.laptop} {
        max-width: 415px;
    }
    @media ${device.tabletL} {
        max-width: 320px;
    }
    @media ${device.tablet} {
        max-width: 250px;
    }
    @media (max-width: 620px) {
        max-width: 250px;
        justify-content: flex-start;
    }
    @media ${device.mobileL} {
        padding-right: 0px;
    }
`

const TermHeaderText = styled.div<TermProps>`
    font-size: 3.8rem;
    line-height: 53px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding: 0 110px 30px 0;

    @media ${device.laptopM} {
        padding: 0 0 0 70px;
        font-size: 3.4rem;
    }
    @media ${device.tablet} {
        padding: 0 25px 0 0;
        font-size: 3rem;
    }
`

const TermImage = styled.img`
    width: 95px;
    height: 95px;
    filter: drop-shadow(0 0 13.5px rgba(0, 0, 0, 0.15));

    @media ${device.laptopM} {
        width: 80px;
        height: 80px;
    }

    @media ${device.tabletL} {
        width: 55px;
        height: 55px;
    }

    @media ${device.tabletS} {
        width: 40px;
        height: 40px;
    }
`

const TermText = styled.div<TermProps>`
    font-size: 1.8rem;
    line-height: 22px;
    color: var(--color-black-3);
    font-weight: 480;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;

    @media ${device.laptopM} {
        font-size: 1.25rem;
        line-height: 18px;
    }

    @media ${device.tabletL} {
        line-height: 14px;
    }
`

const Term = styled.div<TermProps>`
    max-width: 226px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-top: ${(props) =>
        props.index === 0 ? 'unset' : props.index < 2 ? 'unset' : '1px solid gray'};
    border-bottom: ${(props) => (props.index > 5 ? 'unset' : '1px solid gray')};
    border-left: ${(props) => (props.index % 2 ? '1px solid gray' : 'unset')};

    @media ${device.laptopM} {
        max-width: 190px;
    }
    @media ${device.tabletL} {
        max-width: 120px;
        height: 90px;
    }
    @media ${device.tablet} {
        max-width: 120px;
    }
    @media ${device.tabletS} {
        height: 70px;
    }
`

const Table = ({ data, text }: DataType) => {
    return (
        <TableContainer>
            <TermHeaderText>{text}</TermHeaderText>
            {data.map((item, index) => (
                <Term key={index} index={index}>
                    <TermImage src={item.icon} alt={item.text} />
                    <TermText>{item.text}</TermText>
                </Term>
            ))}
        </TableContainer>
    )
}

export default Table
