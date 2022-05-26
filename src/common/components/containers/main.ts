import styled from 'styled-components'

type HeaderProps = {
    font_size?: string
    font_weight?: string
    color?: string
}
type TextProps = {
    font_size?: string
    width?: string
    text_align?: string
    padding?: string
}
type ImageProps = {
    width?: string
    height?: string
}

export const ContactUsButton = styled.button`
    width: fit-content;
    height: 25px;
    color: black;
    background-color: orange;
    border-radius: 10px;
    font-size: 10px;
`

export const ImageContainer = styled.img<ImageProps>`
    width: ${(props) => (props.width ? props.width : '400px')};
    height: ${(props) => (props.height ? props.height : '100%')};
`

export const Header = styled.div<HeaderProps>`
    font-size: ${(props) => (props.font_size ? props.font_size : '24px')};
    font-weight: ${(props) => (props.font_weight ? props.font_weight : 'bold')};
    text-align: left;
    padding: 10px 40px 10px 0;
    color: ${(props) => (props.color ? props.color : 'black')};
`
export const Text = styled.div<TextProps>`
    font-size: ${(props) => (props.font_size ? props.font_size : '16px')};
    line-height: 22px;
    width: ${(props) => (props.width ? props.width : '300px')};
    text-align: ${(props) => (props.text_align ? props.text_align : 'left')};
    padding: ${(props) => (props.padding ? props.padding : '15px 0')};
    color: ${(props) => (props.color ? props.color : 'black')};
`
