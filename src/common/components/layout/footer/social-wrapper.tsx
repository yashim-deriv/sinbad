import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { SocialWrapper } from '../../containers/common/style'
import MapSvg from 'images/svg/map.svg'
import PhoneSvg from 'images/svg/phone.svg'
import EmailSvg from 'images/svg/mail.svg'

const ContactLink = styled(GatsbyLink)`
    align-self: center;
    padding: 8px;
    border-radius: 31px;
    display: flex;
`

const ContactText = styled.div`
    font-size: 16px;
    color: white;
    padding-top: 10px;
    padding-left: 10px;
`

const ContactImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: white;
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    padding-right: 45px;
`

const SocialWrapperComponent = () => {
    const contacts = [
        {
            id: 0,
            image: MapSvg,
            info: 'Sinbad Software LLC',
            details: 'Suite 112, Excepteur cupidatat non',
            link: '',
        },
        {
            id: 1,
            image: PhoneSvg,
            info: 'Phone:',
            details: '888 22200 33300',
            link: '',
        },
        {
            id: 2,
            image: EmailSvg,
            info: 'Email:',
            details: 'info@sindbadsoftware.com',
            link: '',
        },
    ]

    return (
        <SocialWrapper>
            {contacts.map((contact) => (
                <ContactContainer key={contact.id}>
                    <ContactLink to={contact.link}>
                        <ContactImage src={contact.image} />
                    </ContactLink>
                    <div>
                        <ContactText>{contact.info}</ContactText>
                        <ContactText>{contact.details}</ContactText>
                    </div>
                </ContactContainer>
            ))}
        </SocialWrapper>
    )
}

export default SocialWrapperComponent
