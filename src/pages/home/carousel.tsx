import React from 'react'
import styled from 'styled-components'
import { IconProps } from '../index'
import { ImageContainer } from 'components/containers'
import Background from 'images/common/background.png'
import { Image0, Image1, Image2 } from 'images/common/homepage/carousel'
import { ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'
import { SectionLabel } from 'components/chunks'

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;

    @media ${device.tabletS} {
        background-image: none;
    }
`

const CarouselContainerWrapper = styled(ContainerWrapper)`
    justify-content: space-between;
    margin: 0 0 75px 0;

    @media ${device.tabletL} {
        flex-direction: row;
        align-items: center;
    }
`

const CarouselTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;

    @media ${device.tabletS} {
        padding: 50px 0 0;
    }
`

const CarouselImageContainer = styled.div`
    margin-right: 10rem;

    @media ${device.tablet} {
        margin-right: 0;
    }
`

const CarouselImage = styled(ImageContainer)`
    object-fit: contain;
    max-width: 700px;
    max-height: none;
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

const StyledUpperText = styled.div<{ font_family?: string }>`
    font-size: 4.2rem;
    line-height: 59px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-transform: uppercase;

    @media ${device.laptop} {
        font-size: 3.6rem;
        line-height: 52px;
    }
    @media ${device.tabletL} {
        font-size: 3.2rem;
        line-height: 44px;
    }
    @media ${device.tablet} {
        font-size: 2.8rem;
        line-height: 38px;
    }
    @media ${device.tabletS} {
        font-size: 2.4rem;
        line-height: 34px;
    }
`

const TextLabel = styled.div<{ font_family?: string }>`
    font-size: 4.2rem;
    line-height: 57px;
    color: var(--color-sand-4);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};

    @media ${device.laptop} {
        font-size: 3.6rem;
        line-height: 52px;
    }
    @media ${device.tabletL} {
        font-size: 3.2rem;
        line-height: 44px;
    }
    @media ${device.tablet} {
        font-size: 2.8rem;
        line-height: 38px;
    }
    @media ${device.tabletS} {
        font-size: 2.4rem;
        line-height: 34px;
    }
`

const data = [
    {
        text: 'Designing scalable apps',
        background: Image0,
    },
    {
        text: 'Creating reliable platforms',
        background: Image1,
    },
    {
        text: 'Building powerful software',
        background: Image2,
    },
]

const Carousel = ({ active, setActive }: IconProps) => {
    return (
        <CarouselContainer>
            <CarouselContainerWrapper>
                <CarouselTextContainer>
                    <SectionLabel />
                    <StyledUpperText>
                        Transforming <br />
                        ideas into <br />
                        solutions
                    </StyledUpperText>
                    {data.map(
                        (current_item, index) =>
                            index == active && <TextLabel>{current_item.text}</TextLabel>,
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

                <CarouselImageContainer>
                    {data.map((current_item, index) => {
                        if (index === active) {
                            return <CarouselImage key={index} src={current_item.background} />
                        }
                    })}
                </CarouselImageContainer>
            </CarouselContainerWrapper>
        </CarouselContainer>
    )
}

export default Carousel
