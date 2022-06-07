import React from 'react'
import styled from 'styled-components'
import { IconProps } from '../index'
import ActiveButton from 'images/svg/carousel/active_button.svg'
import UnActiveButton from 'images/svg/carousel/unactive_button.svg'
import Image0 from 'images/svg/carousel/carousel-0.svg'
import Image1 from 'images/svg/carousel/carousel-1.svg'
import Image2 from 'images/svg/carousel/carousel-2.svg'
import Sinbad0 from 'images/common/carousel/sinbad-0.png'
import Sinbad1 from 'images/common/carousel/sinbad-1.png'
import Sinbad2 from 'images/common/carousel/sinbad-2.png'
import { ImageContainer, Text } from 'common/components/containers'

type PickerProps = {
    is_active?: boolean
}

const CarouselContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    background-color: var(--color-sand-2);
    background-repeat: no-repeat;
    background-size: 100%;
    padding-left: 50px;
`

const CarouselTextContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
`

const PickerContainer = styled.div`
    width: 400px;
    height: 40px;
`

const Picker = styled.button<PickerProps>`
    width: 30px;
    height: 30px;
    border: none;
    background-image: url(${(props) => (props.is_active ? ActiveButton : UnActiveButton)});
    background-repeat: no-repeat;
    background-color: var(--color-sand-2);
    padding-right: 45px;
`

const data = [
    {
        text: 'Designing scalable apps',
        img: Image0,
    },
    {
        text: 'Creating reliable platforms',
        img: Image1,
    },
    {
        text: 'Building powerful software',
        img: Image2,
    },
]

const join_team = [{ icon: Sinbad0 }, { icon: Sinbad1 }, { icon: Sinbad2 }]

const Carousel = ({ active, setActive }: IconProps) => {
    return (
        <>
            <CarouselContainer>
                <CarouselTextContainer>
                    <Text color="red">Sinbad Sowtfare</Text>
                    <Text font_size="24px">TRANSFORMING IDEAS INTO SOLUTIONS</Text>
                    {data.map(
                        (current_item, index) =>
                            index == active && <Text color="red">{current_item.text}</Text>,
                    )}

                    <PickerContainer>
                        <Picker
                            onClick={() => setActive(0)}
                            is_active={active == 0 ? true : false}
                        ></Picker>
                        <Picker
                            onClick={() => setActive(1)}
                            is_active={active == 1 ? true : false}
                        ></Picker>
                        <Picker
                            onClick={() => setActive(2)}
                            is_active={active == 2 ? true : false}
                        ></Picker>
                    </PickerContainer>
                </CarouselTextContainer>
                {join_team.map(
                    (current_item, index) =>
                        index == active && <ImageContainer key={active} src={current_item.icon} />,
                )}
                {data.map(
                    (current_item, index) =>
                        index == active && <ImageContainer src={current_item.img} />,
                )}
            </CarouselContainer>
        </>
    )
}

export default Carousel
