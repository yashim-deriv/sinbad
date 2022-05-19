import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
//Logo
import MapSvg from '../../../../images/svg/map.svg'
import PhoneSvg from '../../../../images/svg/phone.svg'
import EmilSvg from '../../../../images/svg/mail.svg'
import { SocialWrapper } from './common/style'

const LinkedImage = styled.img`
    background-color: white;
    width: 41px;
    height: 41px;
    border-radius: 20px;
`

const SocialWrapperComponent = () => {
    const info = [
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
            info: 'Email',
            details: 'info@sindbadsoftware.com',
        },
    ]

    return (
        <SocialWrapper>
            {info.map((info, index) => (
                <GatsbyLink key={index}>
                    <LinkedImage src={info.image} />
                    <div>{info.info}</div>
                    <div>{info.details}</div>
                </GatsbyLink>
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
