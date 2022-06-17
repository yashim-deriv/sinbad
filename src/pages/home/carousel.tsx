import React, { useState } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Background from 'images/common/background.png'
import { ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'
import { SectionLabel } from 'components/chunks'
import { ImageContainer } from 'components/containers'

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
    margin: 75px 0 100px 0;

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

const CarouselImageContainer = styled(ImageContainer)`
    max-width: 600px;
    max-height: none;
    margin: 4rem 4rem 0 0;

    @media ${device.tablet} {
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

const BasicText = styled.div<{ font_family?: string }>`
    font-size: 4.2rem;
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

const StyledUpperText = styled(BasicText)`
    line-height: 59px;
    color: var(--color-black-3);
    text-transform: uppercase;
`

const TextLabel = styled(BasicText)`
    line-height: 57px;
    color: var(--color-sand-4);
`

const StyledText = styled.div<{ font_family?: string }>`
    font-size: 3.2rem;
    line-height: 62px;
    color: var(--color-sand-4);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};

    @media ${device.laptop} {
        font-size: 3rem;
        line-height: 52px;
    }
    @media ${device.tabletL} {
        font-size: 2.6rem;
        line-height: 46px;
    }
    @media ${device.tablet} {
        font-size: 2.4rem;
        line-height: 40px;
    }
    @media ${device.tabletS} {
        font-size: 2.2rem;
        line-height: 36px;
    }
`

const data = [
    {
        text: 'Designing scalable apps',
        img: (
            <StaticImage
                key={0}
                src="../../images/common/homepage/carousel/carousel-0.png"
                alt="Designing scalable apps"
                objectFit="contain"
                loading="eager"
                placeholder="none"
            />
        ),
    },
    {
        text: 'Creating reliable platforms',
        img: (
            <StaticImage
                key={1}
                src="../../images/common/homepage/carousel/carousel-1.png"
                alt="Creating reliable platforms"
                objectFit="contain"
                loading="eager"
                placeholder="none"
            />
        ),
    },
    {
        text: 'Building powerful software',
        img: (
            <StaticImage
                key={2}
                src="../../images/common/homepage/carousel/carousel-2.png"
                alt="Building powerful software"
                objectFit="contain"
                loading="eager"
                placeholder="none"
            />
        ),
    },
]

const Carousel = () => {
    const [active, setActive] = useState(0)

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
                    {data.map((slide, index) => {
                        if (index === active) {
                            return slide.img
                        }
                    })}
                </CarouselImageContainer>
            </CarouselContainerWrapper>
        </CarouselContainer>
    )
}

export default Carousel
