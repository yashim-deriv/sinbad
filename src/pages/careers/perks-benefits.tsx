import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ContainerWrapper } from 'components/containers'
import Table, { TableType } from 'components/containers/table'
import { OpacityBackground } from 'images/common/careers'
import device from 'themes/device'
import { SectionLabel } from 'components/chunks'

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
    align-items: flex-start;

    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media ${device.tabletS} {
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
    margin-bottom: 100px;

    @media ${device.tablet} {
        padding-right: 0;
    }
    @media ${device.tabletL} {
        margin-bottom: 0;
    }
`

const StyledText = styled.div<StyledTextProps>`
    max-width: 350px;
    width: 100%;
    font-size: 1.6rem;
    line-height: 27px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
    padding: 15px 0;

    @media ${device.laptopM} {
        font-size: 1.8rem;
        line-height: 20px;
    }

    @media ${device.tabletL} {
        font-size: 2rem;
        line-height: 18px;
    }
`

const StyledHeader = styled.div<StyledTextProps>`
    width: 100%;
    font-size: 4.8rem;
    line-height: 53px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding: 10px 0 20px;

    @media ${device.laptopM} {
        max-width: 450px;
        font-size: 4.2rem;
        line-height: 46px;
    }
    @media ${device.tabletL} {
        max-width: 305px;
        font-size: 3.8rem;
        line-height: 40px;
    }
`

const data: TableType[] = [
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/insurance.png"
                alt="background check icon"
                placeholder="tracedSVG"
                width={95}
                height={95}
            />
        ),
        text: 'Full medical insurance',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/education.png"
                alt="background check icon"
                placeholder="tracedSVG"
                width={95}
                height={95}
            />
        ),
        text: 'Education assistance & training programms',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/annual.png"
                alt="background check icon"
                placeholder="tracedSVG"
                width={95}
                height={95}
            />
        ),
        text: '22 days annual leave',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/office.png"
                alt="background check icon"
                placeholder="tracedSVG"
                width={95}
                height={95}
            />
        ),
        text: 'Chic, comfy office in the heart of Dubai',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/security.png"
                alt="background check icon"
                placeholder="tracedSVG"
                width={95}
                height={95}
            />
        ),
        text: 'Social security',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/tech.png"
                alt="background check icon"
                placeholder="tracedSVG"
                width={95}
                height={95}
            />
        ),
        text: 'Corporate laptops, monitors, and other hardware',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/bonus.png"
                alt="background check icon"
                placeholder="tracedSVG"
                width={95}
                height={95}
            />
        ),
        text: 'Annual bonus',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/pantry.png"
                alt="background check icon"
                placeholder="tracedSVG"
                width={95}
                height={95}
            />
        ),
        text: 'Well-stocked pantry, coffee machines, and more',
    },
]

const PerksBenefits = () => {
    return (
        <PBContainer>
            <PBContainerWrapper>
                <TextAboutCareer>
                    <SectionLabel />
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
                <Table data={data} text={'Perks and benefits'} />
            </PBContainerWrapper>
        </PBContainer>
    )
}

export default PerksBenefits
