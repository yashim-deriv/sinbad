import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Image0 from 'images/svg/carousel-0.svg'
import Image1 from 'images/svg/carousel-1.svg'
import Image2 from 'images/svg/carousel-2.svg'
import Sahara from 'images//common/sahara.jpeg'
import Dot from 'images/svg/dot.svg'

const CarouselContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    background-image: url(${Sahara});
    padding-left: 50px;
`

const CarouselTextContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
`

const CarouselText = styled.div`
    font-size: ${(props) => (props.font_size ? props.font_size : '16px')};
    color: ${(props) => (props.color ? props.color : 'black')};
    padding: 10px 10px;
    padding-bottom: 10px;
`

const CarouselImageContainer = styled.img`
    height: 100px;
    width: 100px;
`

const PickerContainer = styled.div`
    width: 400px;
    height: 40px;
`

const Picker = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background-image: url(${Dot});
    background-repeat: no-repeat;
    background-color: white;
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

const Carousel = () => {
    const [active, setActive] = useState(0)

    return (
        <>
            <CarouselContainer>
                <CarouselTextContainer>
                    <CarouselText color="red">Sinbad Sowtfare</CarouselText>
                    <CarouselText font_size="24px">TRANSFORMING IDEAS INTO SOLUTIONS</CarouselText>
                    <CarouselText color="red">{data[active].text}</CarouselText>
                    <PickerContainer>
                        <Picker onClick={() => setActive(0)}></Picker>
                        <Picker onClick={() => setActive(1)}></Picker>
                        <Picker onClick={() => setActive(2)}></Picker>
                    </PickerContainer>
                </CarouselTextContainer>
                <CarouselImageContainer src={data[active].img} />
            </CarouselContainer>
        </>
    )
}

export default Carousel
