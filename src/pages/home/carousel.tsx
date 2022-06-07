import React from 'react'
import styled from 'styled-components'
import { IconProps } from '../index'
import { Header, ImageContainer, Text } from 'components/containers'
import Image0 from 'images/common/homepage/carousel/carousel-0.png'
import Image1 from 'images/common/homepage/carousel/carousel-1.png'
import Image2 from 'images/common/homepage/carousel/carousel-2.png'
import Background from 'images/common/homepage/carousel/background.png'
import Sinbad0 from 'images/common/homepage/carousel/sinbad-0.png'
import Sinbad1 from 'images/common/homepage/carousel/sinbad-1.png'
import Sinbad2 from 'images/common/homepage/carousel/sinbad-2.png'
import ActiveButton from 'images/common/homepage/carousel/active_button.png'
import UnActiveButton from 'images/common/homepage/carousel/unactive_button.png'
import { ContainerWrapper } from 'components/containers/common/style'

type PickerProps = {
    is_active?: boolean
}

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;
`

const CarouselContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 80px;
    justify-content: space-between;
`

const CarouselTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0 170px;
`

const CarouselImage = styled.div`
    margin-right: 10rem;
`

const PickerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 140px;
`

const Picker = styled.div<PickerProps>`
    width: ${(props) => (props.is_active ? '54px' : '27px')};
    height: ${(props) => (props.is_active ? '54px' : '27px')};
    border-radius: ${(props) => (props.is_active ? '26px' : '14px')};
    background-image: url(${(props) => (props.is_active ? ActiveButton : UnActiveButton)});
    background-repeat: no-repeat;
`

const StyledText = styled(Text)`
    padding: unset;
`
const StyledUpperText = styled(Header)`
    padding: unset;
    text-transform: uppercase;
`

const TextLabel = styled(Text)`
    max-width: 400px;
`

const data = [
    {
        text: 'Designing scalable apps',
        background: Image0,
        sinbad: Sinbad0,
    },
    {
        text: 'Creating reliable platforms',
        background: Image1,
        sinbad: Sinbad1,
    },
    {
        text: 'Building powerful software',
        background: Image2,
        sinbad: Sinbad2,
    },
]

const Carousel = ({ active, setActive }: IconProps) => {
    return (
        <CarouselContainer>
            <CarouselContainerWrapper>
                <CarouselTextContainer>
                    <StyledText
                        color="var(--color-sand-4)"
                        font_size="3.2rem"
                        line_height="62px"
                        font_family="Maven Pro"
                    >
                        <strong>Sinbad</strong> Software
                    </StyledText>
                    <StyledUpperText
                        color="var(--color-black-3)"
                        font_size="4.2rem"
                        line_height="59px"
                    >
                        Transforming <br />
                        ideas into <br />
                        solutions
                    </StyledUpperText>
                    {data.map(
                        (current_item, index) =>
                            index == active && (
                                <TextLabel
                                    color="var(--color-sand-4)"
                                    font_size="4.2rem"
                                    line_height="57px"
                                    width="100%"
                                >
                                    {current_item.text}
                                </TextLabel>
                            ),
                    )}

                    <PickerContainer>
                        {[...Array(data.length).keys()].map((d, e) => (
                            <Picker
                                key={e}
                                onClick={() => setActive(e)}
                                is_active={active == e ? true : false}
                            ></Picker>
                        ))}
                    </PickerContainer>
                </CarouselTextContainer>

                <CarouselImage>
                    {data.map((current_item, index) => {
                        if (index === active) {
                            return <ImageContainer key={index} src={current_item.background} />
                        }
                    })}
                </CarouselImage>
            </CarouselContainerWrapper>
        </CarouselContainer>
    )
}

export default Carousel
