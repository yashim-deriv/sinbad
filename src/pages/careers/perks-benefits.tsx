import React from 'react'
import styled from 'styled-components'
import Random from 'images/svg/random.svg'
import Sinbad1 from 'images/common/careers/sinbad-1.png'
import { Text, Header, ImageContainer } from 'components/containers'
import Table, { PBType } from 'components/containers/table'

const PBContainer = styled.div`
    display: flex;
    width: 1140px;
    height: 480px;
    text-align: center;
    justify-content: center;
    align-items: center;
`
const HeaderContainer = styled.div`
    width: 240px;
`
const TextAboutCareer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    padding: 30px 0 30px 150px;
`

const PBTable = styled.div`
    width: 140px;
    height: 340px;
    font-size: 20px;
    font-weight: bold;
`

const pb_data: PBType = {
    our_terms: {
        first_column: [
            {
                icon: Random,
                text: 'Full medical insurance',
            },
            {
                icon: Random,
                text: 'Education assistance & training programms',
            },
            {
                icon: Random,
                text: '22 days annual leave',
            },
            {
                icon: Random,
                text: 'Chic, comfy office in the heart of Dubai',
            },
        ],
        second_column: [
            {
                icon: Random,
                text: 'Social security',
            },
            {
                icon: Random,
                text: 'Corporate laptops, monitors, and other hardware',
            },
            {
                icon: Random,
                text: 'Annual bonus',
            },
            {
                icon: Random,
                text: 'Well-stocked pantry, coffee machines, and more',
            },
        ],
    },
}

const PerksBenefits = () => {
    return (
        <PBContainer>
            <TextAboutCareer>
                <HeaderContainer>
                    <Header color="red">Sinbad Software</Header>
                    <Header font_size="28px">Helping you grow in your career</Header>
                </HeaderContainer>
                <Text padding="15px 0 15px">
                    We offer a robust training programme to help you with seamless onboarding when
                    you join us. Depending on your needs, your team lead might provide you with
                    technical training, too. Most importantly, we have an ongoing education
                    assistance programme - applicable to both short-term and long-term work-related
                    courses - to encourage colleagues to boost their knowledge and skills. Lateral
                    moving is also a practice that we warmly welcome as a part of your career
                    development as it can broaden and deepen your expirience.
                </Text>
            </TextAboutCareer>
            <ImageContainer src={Sinbad1} />
            <PBTable>
                Our Terms
                <Table data={pb_data} />
            </PBTable>
        </PBContainer>
    )
}

export default PerksBenefits
