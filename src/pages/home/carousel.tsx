import React from 'react'
import styled from 'styled-components'
import { IconProps } from '../index'
import { ContainerWrapper, Header, ImageContainer, Text } from 'components/containers'
import Image0 from 'images/common/homepage/carousel/carousel-0.png'
import Image1 from 'images/common/homepage/carousel/carousel-1.png'
import Image2 from 'images/common/homepage/carousel/carousel-2.png'
import Background from 'images/common/homepage/carousel/background.png'
import Sinbad0 from 'images/common/homepage/carousel/sinbad-0.png'
import Sinbad1 from 'images/common/homepage/carousel/sinbad-1.png'
import Sinbad2 from 'images/common/homepage/carousel/sinbad-2.png'
import ActiveButton from 'images/common/homepage/carousel/active_button.png'
import UnActiveButton from 'images/common/homepage/carousel/unactive_button.png'

type PickerProps = {
    is_active?: boolean
}

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #fef5e6;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;
`

const CarouselContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
`

const CarouselTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0;
`

const FirstHeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 220px;
`
const SecondHeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 250px;
`
const ThirdHeroContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`

const PickerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
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
                        color="#f47c48"
                        font_size="33px"
                        line_height="62px"
                        font_weight="656"
                        font_family="Maven Pro"
                    >
                        Sinbad Sowtfare
                    </StyledText>
                    <StyledUpperText
                        color="#232323"
                        font_size="49px"
                        line_height="59px"
                        font_weight="656"
                        font_family="Maven Pro"
                    >
                        Transforming ideas into solutions
                    </StyledUpperText>
                    {data.map(
                        (current_item, index) =>
                            index == active && (
                                <StyledText
                                    color="#f47c48"
                                    font_size="46px"
                                    line_height="57px"
                                    font_weight="574"
                                    font_family="Maven Pro"
                                    width="400px"
                                >
                                    {current_item.text}
                                </StyledText>
                            ),
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

                {data.map((current_item, index) =>
                    index == active && index == 0 ? (
                        <FirstHeroContainer>
                            <ImageContainer
                                key={index}
                                src={current_item.background}
                                width="650px"
                                height="650px"
                            />
                        </FirstHeroContainer>
                    ) : index == active && index == 1 ? (
                        <SecondHeroContainer>
                            <ImageContainer
                                key={index}
                                src={current_item.background}
                                width="650px"
                                height="650px"
                            />
                        </SecondHeroContainer>
                    ) : index == active && index == 2 ? (
                        <ThirdHeroContainer>
                            <ImageContainer
                                key={index}
                                src={current_item.background}
                                width="900px"
                                height="650px"
                            />
                        </ThirdHeroContainer>
                    ) : (
                        ''
                    ),
                )}
            </CarouselContainerWrapper>
        </CarouselContainer>
    )
}

export default Carousel
