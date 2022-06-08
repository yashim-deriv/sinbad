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
import { ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;

    @media ${device.mobileL} {
        background-image: none;
    }
`

const CarouselContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    justify-content: space-between;
    margin: 0 0 100px 0;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        align-items: center;
    }
`

const CarouselTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0 170px;

    @media ${device.mobileL} {
        padding: 50px 0 0;
    }
`

const CarouselImage = styled.div`
    margin-right: 10rem;

    @media ${device.mobileL} {
        margin-right: 0;
    }
`

const PickerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    margin: 10px 0 0 0;
`

const CarouselDots = styled.span`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 0 8px 0 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        border-radius: 100px;
        border: solid 1px var(--color-sand-4);
        width: 0%;
        height: 0%;
        position: absolute;
        transition: all 0.5s ease-in;
    }

    /* stylelint-disable */

    &.active {
        &::before {
            width: 100%;
            height: 100%;
        }
        i {
            background: var(--color-sand-4);
        }
    }

    i {
        display: flex;
        width: 20px;
        height: 20px;
        position: relative;
        z-index: 2;
        background: var(--color-grey-1);
        transition: all 0.5s ease-in;
        border-radius: 100%;
    }
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
                            <CarouselDots
                                key={e}
                                onClick={() => setActive(e)}
                                className={active === e ? 'active' : ''}
                            >
                                <i />
                            </CarouselDots>
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
