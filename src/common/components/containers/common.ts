import styled from 'styled-components'

export const ContactUsButton = styled.button`
    width: fit-content;
    height: 25px;
    color: black;
    background-color: orange;
    border-radius: 10px;
    font-size: 10px;
`

export const HeaderText = styled.div`
    font-size: ${(props) => (props.font_size ? props.font_size : '24px')};
    font-weight: ${(props) => (props.font_weight ? props.font_weight : 'bold')};
    text-align: left;
    padding: 10px 40px 10px 0;
    color: ${(props) => (props.color ? props.color : 'black')};
`
export const CommonText = styled.div`
    font-size: 15px;
    line-height: 22px;
    width: ${(props) => (props.width ? props.width : '300px')};
    text-align: ${(props) => (props.text_align ? props.text_align : 'left')};
    padding: ${(props) => (props.padding ? props.padding : '15px 0')};
`
