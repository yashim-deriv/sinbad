import React from 'react'
import styled from 'styled-components'
import { RoundRight } from 'images/svg'

/* stylelint-disable */

type ButtonProps = {
    has_icon?: boolean
    label: string
    onClick: () => void
}

const ButtonItem = styled.button`
    display: flex;
    width: fit-content;
    align-items: center;
    height: 45px;
    background: var(--color-sand-4);
    border-radius: 30px 0px 0px 30px;
    transition: 0.2s ease-in background;
    padding: 6px;
    cursor: pointer;
    border: none;

    &:hover {
        background: var(--color-sand-5);
    }

    img {
        height: 32px;
    }

    span {
        font-size: 1.6rem;
        color: var(--color-white);
        text-transform: uppercase;
        font-weight: bold;
        margin: 0 10px 0 10px;
    }
`

const Button = ({ has_icon = true, label, onClick }: ButtonProps) => {
    return (
        <ButtonItem onClick={onClick}>
            {has_icon && <img src={RoundRight} />}
            <span>{label}</span>
        </ButtonItem>
    )
}

export default Button
