import React, { useEffect } from "react";
import styled from 'styled-components';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContainerContact = styled.section`

`
const Container = styled.div`
    // margin-top: 10vw;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
    width: 100%;
    h1 {
        color: white;
        font-size: 5vw;
        text-transform: uppercase;
        text-align: center;
        margin-top: 5vw;
        margin-bottom: 5vw;
        a {
            color: var(--text-color);
            &:hover {
                text-decoration: none;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        h1{
            color: white;
            text-transform: uppercase;
        }
    }
`
const Button = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2vw;
    margin-bottom: 2vw;
    span {
        font-size: 2vw;
        font-weight: 500;
        color: var(--text-color);
    }
    a {
        font-size: 2vw;
        font-weight: 500;
        color: var(--text-color);
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    @media screen and (max-width: 1024px) {
        span {
            font-size: 3vw;
            font-weight: 500;
        }
        a {
            font-size: 3vw;
            font-weight: 500;
        }
    }
`
const Footer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2vw;
    margin-bottom: 2vw;
    font-size: 1.2vw;
    @media screen and (max-width: 1024px) {
        justify-content: center;
        flex-direction: column;
        font-size: 3vw;
    }
`
const Name = styled.div`
`
const Socials = styled.div`
    display: flex;
    @media screen and (max-width: 1024px) {
        margin-top: 2vw;
        margin-bottom: 2vw;
    }
    a {
        margin: 1rem;
        color: var(--text-color);
        text-decoration: none;
    }
`
const NumberTitle = styled.div`
    span {
        font-size: 2vw;
        color: var(--main-color);
        font-weight: 700;
        font-family: "Bai Jamjuree", sans-serif;
    }
    @media screen and (max-width: 768px) {
        span {
            font-size: 4vw;
            font-weight: 700;
            font-family: "Bai Jamjuree", sans-serif;
        }
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
const Contact = () => {
    AOS.init();
    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     // SECTION 1
    //     gsap.fromTo('.LAnim', {
    //         opacity: 0,
    //         y: "100%",
    //         skewY: 10
    //     },
    //         {
    //             scrollTrigger: ".LAnim",
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //             skewY: 0
    //         });
    //     gsap.fromTo('.LAnim2', {
    //         opacity: 0,
    //         y: "100%",
    //         skewY: -10
    //     },
    //         {
    //             scrollTrigger: ".LAnim2",
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //             skewY: 0
    //         });



    //     gsap.fromTo('.MAnim', {
    //         opacity: 0,
    //         y: "100%",
    //     },
    //         {
    //             scrollTrigger: ".MAnim",
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //         });



    //     gsap.fromTo('.BAnim0', {
    //         opacity: 0,
    //         y: "100%",
    //     },
    //         {
    //             scrollTrigger: ".BAnim0",
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //             delay: 0.3
    //         });
    //     gsap.fromTo('.BAnim', {
    //         opacity: 0,
    //         y: "100%",
    //     },
    //         {
    //             scrollTrigger: ".BAnim",
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //             delay: 0.6
    //         });
    //     gsap.fromTo('.BAnim2', {
    //         opacity: 0,
    //         y: "100%",
    //     },
    //         {
    //             scrollTrigger: ".BAnim2",
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //             delay: 0.9
    //         });
    //     gsap.fromTo('.BAnim3', {
    //         opacity: 0,
    //         y: "100%",
    //     },
    //         {
    //             scrollTrigger: ".BAnim3",
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //             delay: 1.2
    //         });
    // }, []);
    return (
        <ContainerContact id="contact">
            <NumberTitle>
                <span>03/</span>
            </NumberTitle>
            <Button data-aos="fade-down" data-aos-duration="1500">
                <span className="LAnim">WANT TO WORK <br />TOGETHER ?</span>
                <a href='/contact' className="LAnim2">SEND ME A <br />MESSAGE →</a>
            </Button>
            <Container data-aos="fade-up" data-aos-duration="1500">
                <h1 className="MAnim">
                    <a href="mailto:veguspl@gmail.com">veguspl@gmail.com</a>
                </h1>
                <Footer>
                    <Name className="BAnim0">
                        <span>Dominik Dąbrowski<br />
                            Creative developer</span>
                    </Name>
                    <Socials>
                        <LinkTest className="BAnim">
                            <ItemTest>
                                <ItemLink href="https://github.com/xdomsky" target="_blank">GitHub</ItemLink>
                            </ItemTest>
                        </LinkTest>
                        <LinkTest className="BAnim2">
                            <ItemTest>
                                <ItemLink href="https://twitter.com/xdomsky" target="_blank">Twitter</ItemLink>
                            </ItemTest>
                        </LinkTest>
                        <LinkTest className="BAnim3">
                            <ItemTest>
                                <ItemLink href="https://www.instagram.com/xdomskyy/" target="_blank">Instagram</ItemLink>
                            </ItemTest>
                        </LinkTest>
                    </Socials>
                </Footer>
            </Container>
        </ContainerContact>
    )
}

export default Contact