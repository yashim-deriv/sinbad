import React from 'react'
import styled from 'styled-components'
import { Text, Header, Flex } from 'components/containers'
import { SectionLabel, SectionTable } from 'components/chunks'
import { TableDataProps } from 'types/generics'
import Sand from 'images/common/openpositions/join-us-background.png'
import { ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'
import {
    BuildingIcon,
    CalendarIcon,
    ClockIcon,
    CoffeeMachineIcon,
    InsuranceIcon,
    LaptopIcon,
    SecurityIcon,
    TrainingIcon,
} from 'images/common/careers/perks'

const PBContainer = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 30px 0 120px;
    background-color: var(--color-sand-1);
    background-image: url(${Sand});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;
`

const PBWrapper = styled(ContainerWrapper)`
    justify-content: space-between;

    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const HeaderContainer = styled.div`
    width: 100%;
    max-width: 250px;
`
const TextAboutCareer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
`

const TextCareer = styled(Text)`
    max-width: 335px;
`

const PBTable = styled(Flex)`
    @media ${device.tabletL} {
        padding-top: 50px;
    }
`

const data: TableDataProps[] = [
    {
        icon: InsuranceIcon,
        text: 'Full medical insurance',
    },
    {
        icon: SecurityIcon,
        text: 'Social security',
    },
    {
        icon: TrainingIcon,
        text: 'Education assistance & training programmes',
    },
    {
        icon: LaptopIcon,
        text: 'Corporate laptops, monitors, and other hardware',
    },
    {
        icon: ClockIcon,
        text: '22 days annual leave',
    },
    {
        icon: CalendarIcon,
        text: 'Annual bonus',
    },
    {
        icon: BuildingIcon,
        text: 'Chic, comfy office in the heart of Dubai',
    },
    {
        icon: CoffeeMachineIcon,
        text: 'Well-stocked pantry, coffee machines, and more',
    },
]

const PerksBenefits = () => {
    return (
        <PBContainer>
            <PBWrapper>
                <TextAboutCareer>
                    <HeaderContainer>
                        <SectionLabel />
                        <Header font_size="28px" line_height="36px">
                            Helping you grow in your career
                        </Header>
                    </HeaderContainer>

                    <TextCareer padding="15px 0 15px" line_height="20px">
                        We offer a robust training programme to help you with seamless onboarding
                        when you join us. Depending on your needs, your team lead might provide you
                        with technical training, too. Most importantly, we have an ongoing education
                        assistance programme - applicable to both short-term and long-term
                        work-related courses - to encourage colleagues to boost their knowledge and
                        skills. Lateral moving is also a practice that we warmly welcome as a part
                        of your career development as it can broaden and deepen your expirience.
                    </TextCareer>
                </TextAboutCareer>
                <PBTable>
                    <SectionTable title={'Perks and benefits'} data={data} />
                </PBTable>
            </PBWrapper>
        </PBContainer>
    )
}

export default PerksBenefits
