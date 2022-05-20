import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
//Logo
import MapSvg from '../../../../images/svg/map.svg'
import PhoneSvg from '../../../../images/svg/phone.svg'
import EmailSvg from '../../../../images/svg/mail.svg'
import { SocialWrapper } from './common/style'

const ContactLink = styled(GatsbyLink)`
    width: 100%;
`

const ContactText = styled.div`
    font-size: 16px;
    color: white;
    padding-top: 10px;
`

const ContactImage = styled.img`
    background-color: white;
    width: 41px;
    height: 41px;
    border-radius: 20px;
`

const SocialWrapperComponent: React.FC = () => {
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
                <ContactLink key={contact.id} to={contact.link}>
                    <ContactImage src={contact.image} />
                    <ContactText>{contact.info}</ContactText>
                    <ContactText>{contact.details}</ContactText>
                </ContactLink>
            ))}
        </SocialWrapper>
    )
}

export default SocialWrapperComponent
