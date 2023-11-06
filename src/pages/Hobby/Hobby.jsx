import React from 'react'
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.png";
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const H1 = styled.div`
    font-size: 3vw;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 5rem;
    margin-top: 5rem;
    @media screen and (max-width: 1024px) {
        font-size: 5vw;
    }
`
const Container = styled.div`
    @media screen and (max-width: 728px) {
        grid-template-columns: auto auto;
    }
    display: grid;
    grid-template-columns: auto auto auto;
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const ImageItem = styled.div`
    z-index: 1;
`
const Item = styled.div`
    padding: 20px;
    filter: grayscale(100%) brightness(0.5);
`
function Hobby() {
    AOS.init();
  return (
    <div data-aos="zoom-out" data-aos-duration="1500">
    <H1>so here is my hobby:</H1>
        <Container>
            <ImageItem>
                <Item>
                    <Image>
                        <img src={img1} alt="" />
                    </Image>
                </Item>
            </ImageItem>
            <ImageItem>
                <Item>
                    <Image>
                        <img src={img2} alt="" />
                    </Image>
                </Item>
            </ImageItem>
            <ImageItem>
                <Item>
                    <Image>
                        <img src={img3} alt="" />
                    </Image>
                </Item>
            </ImageItem>
            <ImageItem>
                <Item>
                    <Image>
                        <img src={img4} alt="" />
                    </Image>
                </Item>
            </ImageItem>
            <ImageItem>
                <Item>
                    <Image>
                        <img src={img5} alt="" />
                    </Image>
                </Item>
            </ImageItem>
            <ImageItem>
                <Item>
                    <Image>
                        <img src={img6} alt="" />
                    </Image>
                </Item>
            </ImageItem>
        </Container>
    </div>
  )
}

export default Hobby