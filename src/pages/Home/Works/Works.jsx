import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from 'styled-components'
import img1 from "./01.png";
import img2 from "./02.png";
import img3 from "./03.png";
import img4 from "./04.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContainerWork = styled.section``
const Container = styled.div`
    margin-top: 2rem;
    h4 {
        font-size: 3vw;
        font-weight: 400;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 5rem;
        margin-top: 5rem;
    }
    @media screen and (max-width: 1024px) {
        h4 {
            font-size: 6vw;
        }
    }
`

const NumberTitle = styled.div`
    span {
        font-size: 2vw;
        font-weight: 700;
        font-family: "Bai Jamjuree", sans-serif;
        color: var(--main-color);
    }
    @media screen and (max-width: 768px) {
        span {
            font-size: 4vw;
            font-weight: 700;
            font-family: "Bai Jamjuree", sans-serif;
        }
    }
`
const LinkStyle = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    padding: 0px 4vw;
    color: var(--text-color);
    text-decoration: none;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        padding: 0px 10vw;
        flex-direction: column;
    }
`
const ImageItem = styled.div`
    z-index: 1;
`
const Item = styled.div`
    padding: 20px;
    position: relative;
    width: 40vw;
    height: 35vw;
    left: 0px;
    filter: grayscale(100%) brightness(0.5);
    @media screen and (max-width: 768px) {
        width: 80vw;
        height: 80vw;
    }
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
    img {
        &:hover {
        transform: scale(1.1);
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: 1s;
    }
`
const TextContainer = styled.div`
    margin-left: 4vw;
    @media screen and (max-width: 768px) {
        margin-left: 0px;
        padding-top: 5vw;
    }
`
const TextContainer3 = styled.div`
    display: none;
    margin-left: 4vw;
    @media screen and (max-width: 768px) {
        display: block;
        margin-left: 0px;
        padding-top: 5vw;
    }
`
const TextContainer2 = styled.div`
    margin-right: 4vw;
    @media screen and (max-width: 768px) {
        display: none;
        margin-left: 0px;
        padding-top: 5vw;
    }
`
const TextContent = styled.div`
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`
const Title = styled.div`
    display: flex;
    h1 {
        font-family: "Bai Jamjuree", sans-serif;
        font-size: 5vw;
        margin: 0px;
        line-height: 95%;
        font-weight: 600;
        text-transform: uppercase;
    }
`
const Para = styled.div`
    font-size: 2vw;
    line-height: 120%;
    text-transform: uppercase;
    max-width: 80%;
    p {
        font-size: inherit;
        text-transform: uppercase;
        line-height: 110%;
        margin-bottom: 6vw;
    }
    a {
        color: var(--text-color);
        pointer-events: auto;
        text-decoration: none;
        font-size: inherit;
        position: relative;
        z-index: 2;
        text-transform: uppercase;
    }
    @media screen and (max-width: 768px) {
        font-size: 4vw;
        margin-left: 0vw;
        margin-bottom: 4vw;
    }
`
const LinkTest = styled.div`
    display: flex;
    align-items: center;
`
const ItemTest = styled.div`

`
const ItemLink = styled.a`
    color: #fff;
    display: inline-flex;
    z-index: 1;
    position: relative;
    text-decoration: none;
    margin: 10px;
    &:before {
        content: '';
        position: absolute;
        display: flex;
        bottom: 0;
        left: -10px;
        height: 50%;
        width: 0;
        background: var(--main-color);
        z-index: -1;
        transition: 0.3s;
    }
    &:hover {
        &:before {
            width: calc(100% + 20px);
        }
    }
`
const Work = () => {
    AOS.init();
    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {

    //     // SECTION 1
    //     gsap.fromTo('.LEFTAnim', {
    //         opacity: 0,
    //         x: "-100%",
    //         skewY: 10
    //     },
    //         {
    //             scrollTrigger: ".LEFTAnim",
    //             opacity: 1,
    //             x: 0,
    //             duration: 2,
    //             skewY: 0
    //         });
    //     gsap.fromTo('.RIGHTAnim', {
    //         opacity: 0,
    //         x: "100%",
    //         skewY: -10
    //     },
    //         {
    //             scrollTrigger: ".RIGHTAnim",
    //             opacity: 1,
    //             x: 0,
    //             duration: 2,
    //             skewY: 0
    //         });



    //     // SECTION 2
    //     gsap.fromTo('.LEFTAnim2', {
    //         opacity: 0,
    //         x: "-100%",
    //         skewY: -10
    //     },
    //         {
    //             scrollTrigger: ".LEFTAnim2",
    //             opacity: 1,
    //             x: 0,
    //             duration: 2,
    //             skewY: 0
    //         });
    //     gsap.fromTo('.RIGHTAnim2', {
    //         opacity: 0,
    //         x: "100%",
    //         skewY: 10
    //     },
    //         {
    //             scrollTrigger: ".RIGHTAnim2",
    //             opacity: 1,
    //             x: 0,
    //             duration: 2,
    //             skewY: 0
    //         });



    //     // SECTION 3
    //     gsap.fromTo('.LEFTAnim3', {
    //         opacity: 0,
    //         x: "-100%",
    //         skewY: 10
    //     },
    //         {
    //             scrollTrigger: ".LEFTAnim3",
    //             opacity: 1,
    //             x: 0,
    //             duration: 2,
    //             skewY: 0
    //         });
    //     gsap.fromTo('.RIGHTAnim3', {
    //         opacity: 0,
    //         x: "100%",
    //         skewY: -10
    //     },
    //         {
    //             scrollTrigger: ".RIGHTAnim3",
    //             opacity: 1,
    //             x: 0,
    //             duration: 2,
    //             skewY: 0
    //         });



    //     // SECTION 4
    //     gsap.fromTo('.LEFTAnim4', {
    //         opacity: 0,
    //         x: "-100%",
    //         skewY: -10
    //     },
    //         {
    //             scrollTrigger: ".LEFTAnim4",
    //             opacity: 1,
    //             x: 0,
    //             duration: 2,
    //             skewY: 0
    //         });
    //     gsap.fromTo('.RIGHTAnim4', {
    //         opacity: 0,
    //         x: "100%",
    //         skewY: 10
    //     },
    //         {
    //             scrollTrigger: ".RIGHTAnim4",
    //             opacity: 1,
    //             x: 0,
    //             duration: 2,
    //             skewY: 0
    //         });
    // }, []);
    return (
        <ContainerWork id="works">
            <NumberTitle>
                <span>02/</span>
            </NumberTitle>
            <Container>
                <LinkStyle data-aos="fade-right" data-aos-duration="1500">
                    <ImageItem className="LEFTAnim">
                        <Item>
                            <Image>
                                <img src={img1} alt="" />
                            </Image>
                        </Item>
                    </ImageItem>
                    <TextContainer className="RIGHTAnim">
                        <TextContent>
                            <Title>
                                <h1>ANMAR-MEBLE</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="http://www.anmar-meble.com/" target="_blank">Preview Project</ItemLink><ItemLink href="https://github.com/xdomsky" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer>
                </LinkStyle>
                <LinkStyle data-aos="fade-left" data-aos-duration="1500">
                    <TextContainer2 className="LEFTAnim2">
                        <TextContent>
                            <Title>
                                <h1>WKLEJSE</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="https://wklejse.tk/" target="_blank">Preview Project</ItemLink><ItemLink href="https://github.com/xdomsky/wklejse" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer2>
                    <ImageItem className="RIGHTAnim2">
                        <Item>
                            <Image>
                                <img src={img2} alt="" />
                            </Image>
                        </Item>
                    </ImageItem>
                    <TextContainer3 className="LEFTAnim2">
                        <TextContent>
                            <Title>
                                <h1>WKLEJSE</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="https://wklejse.tk/" target="_blank">Preview Project</ItemLink><ItemLink href="https://github.com/xdomsky/wklejse" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer3>
                </LinkStyle>
                <LinkStyle data-aos="fade-right" data-aos-duration="1500">
                    <ImageItem className="LEFTAnim3">
                        <Item>
                            <Image>
                                <img src={img3} alt="" />
                            </Image>
                        </Item>
                    </ImageItem>
                    <TextContainer className="RIGHTAnim3">
                        <TextContent>
                            <Title>
                                <h1>WATCH LIST</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="https://watchlist-domsky.netlify.app/" target="_blank">Preview Project</ItemLink><ItemLink href="https://github.com/xdomsky/watchlist-app" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer>
                </LinkStyle>
                <LinkStyle data-aos="fade-left" data-aos-duration="1500">
                    <TextContainer2 className="LEFTAnim4">
                        <TextContent>
                            <Title>
                                <h1>RECIPE</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="https://recipe-domsky.netlify.app/" target="_blank">Preview Project</ItemLink><ItemLink href="https://github.com/xdomsky/recipe-app" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer2>
                    <ImageItem className="RIGHTAnim4">
                        <Item>
                            <Image>
                                <img src={img4} alt="" />
                            </Image>
                        </Item>
                    </ImageItem>
                    <TextContainer3 className="LEFTAnim4">
                        <TextContent>
                            <Title>
                                <h1>RECIPE</h1>
                            </Title>
                            <Para>
                                <p>Website design and developed by DOMSKY</p>
                                <LinkTest>
                                    <ItemTest>
                                        <ItemLink href="https://recipe-domsky.netlify.app/" target="_blank">Preview Project</ItemLink><ItemLink href="https://github.com/xdomsky/recipe-app" target="_blank">CODE</ItemLink>
                                    </ItemTest>
                                </LinkTest>
                            </Para>
                        </TextContent>
                    </TextContainer3>
                </LinkStyle>
            </Container>
        </ContainerWork>
    )
}

export default Work