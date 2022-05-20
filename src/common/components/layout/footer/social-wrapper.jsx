import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
//Logo
import MapSvg from '../../../../images/svg/map.svg'
import PhoneSvg from '../../../../images/svg/phone.svg'
import EmilSvg from '../../../../images/svg/mail.svg'
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

const SocialWrapperComponent = () => {
    const contacts = [
        {
            image: MapSvg,
            info: 'Sinbad Software LLC',
            details: 'Suite 112, Excepteur cupidatat non',
        },
        {
            image: PhoneSvg,
            info: 'Phone:',
            details: '888 22200 33300',
        },
        {
            image: EmilSvg,
            info: 'Email:',
            details: 'info@sindbadsoftware.com',
        },
    ]

    return (
        <SocialWrapper>
            {contacts.map((contact, index) => (
                <ContactLink key={index}>
                    <ContactImage src={contact.image} />
                    <ContactText>{contact.info}</ContactText>
                    <ContactText>{contact.details}</ContactText>
                </ContactLink>
            ))}
        </SocialWrapper>
    )
}

SocialWrapperComponent.propTypes = {
    fb_url: PropTypes.string,
    instagram_url: PropTypes.string,
    is_career_page: PropTypes.bool,
    twitter_url: PropTypes.string,
}

export default SocialWrapperComponent
