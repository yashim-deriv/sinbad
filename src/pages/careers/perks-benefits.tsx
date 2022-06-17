import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ContainerWrapper, ImageContainer } from 'components/containers'
import Table, { TableType } from 'components/containers/table'
import {
    Annual,
    OpacityBackground,
    Bonus,
    Education,
    Insurance,
    Office,
    Pantry,
    Security,
    Tech,
} from 'images/common/careers'
import device from 'themes/device'

type StyledTextProps = {
    font_family?: string
}

const PBContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: var(--color-sand-1);
    background-image: url(${OpacityBackground});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;

    @media ${device.mobileL} {
        background-image: none;
    }
`
const PBContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;

    @media ${device.bp1060} {
        justify-content: center;
        padding-bottom: 200px;
    }
    @media ${device.tablet} {
        padding-bottom: 150px;
    }
    @media ${device.tabletS} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0 60px;
    }
`
const TextAboutCareer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    padding-right: 40px;

    @media ${device.tablet} {
        padding-right: 0;
    }
`

const StyledSSHeader = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledSSText = styled.div<StyledTextProps>`
    color: var(--color-sand-4);
    font-size: 3.8rem;
    line-height: 61px;
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    padding-right: 5px;

    @media ${device.laptopM} {
        font-size: 3.4rem;
    }

    @media ${device.tabletL} {
        font-size: 3rem;
    }
`
const StyledText = styled.div<StyledTextProps>`
    max-width: 305px;
    width: 100%;
    font-size: 1.6rem;
    line-height: 27px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: left;
    padding: 15px 0;

    @media ${device.laptopM} {
        font-size: 1.5rem;
        line-height: 20px;
    }

    @media ${device.tabletL} {
        font-size: 1.3rem;
        line-height: 18px;
    }
`
const StyledHeader = styled.div<StyledTextProps>`
    max-width: 305px;
    width: 100%;
    font-size: 4.8rem;
    line-height: 53px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding: 10px 0 20px;

    @media ${device.laptopM} {
        font-size: 4.2rem;
        line-height: 46px;
    }

    @media ${device.tabletL} {
        font-size: 3.8rem;
        line-height: 40px;
    }
`

const StyledImage = styled(ImageContainer)`
    width: 275px;
    height: 780px;
    max-height: unset;

    @media ${device.bp1060} {
        display: none;
    }
`

const data: TableType[] = [
    {
        icon: Insurance,
        text: 'Full medical insurance',
    },
    {
        icon: Education,
        text: 'Education assistance & training programms',
    },
    {
        icon: Annual,
        text: '22 days annual leave',
    },
    {
        icon: Office,
        text: 'Chic, comfy office in the heart of Dubai',
    },
    {
        icon: Security,
        text: 'Social security',
    },
    {
        icon: Tech,
        text: 'Corporate laptops, monitors, and other hardware',
    },
    {
        icon: Bonus,
        text: 'Annual bonus',
    },
    {
        icon: Pantry,
        text: 'Well-stocked pantry, coffee machines, and more',
    },
]

const PerksBenefits = () => {
    return (
        <PBContainer>
            <PBContainerWrapper>
                <TextAboutCareer>
                    <StyledSSHeader>
                        <StyledSSText font_family="Maven Pro Bold">Sinbad </StyledSSText>
                        <StyledSSText>Software</StyledSSText>
                    </StyledSSHeader>
                    <StyledHeader>Helping you grow in your career</StyledHeader>
                    <StyledText>
                        We offer a robust training programme to help you with seamless onboarding
                        when you join us. Depending on your needs, your team lead might provide you
                        with technical training, too. Most importantly, we have an ongoing education
                        assistance programme - applicable to both short-term and long-term
                        work-related courses - to encourage colleagues to boost their knowledge and
                        skills. Lateral moving is also a practice that we warmly welcome as a part
                        of your career development as it can broaden and deepen your expirience.
                    </StyledText>
                </TextAboutCareer>
                <StyledImage>
                    <StaticImage
                        src={`../../images/common/careers/sinbad-near-p&b.png`}
                        alt="sinbad mascott"
                        placeholder="none"
                    />
                </StyledImage>
                <Table data={data} text={'Perks and benefits'} />
            </PBContainerWrapper>
        </PBContainer>
    )
}

export default PerksBenefits
