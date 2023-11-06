import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../../utils/Split3.min";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.section`
    color: var(--text-color);
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
const TextContainer = styled.div`
    margin-left: 25vw;
    @media screen and (max-width: 768px) {
        margin-left: 4vw;
    }
`
const Span1 = styled.span`
    font-size: 2.5vw;
    font-weight: 400;
    line-height: 1.4;
    a {
        color: var(--main-color);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    @media screen and (max-width: 768px) {
        font-size: 4vw;
        font-weight: 500;
    }
`
const Span2 = styled.span`
    font-size: 2.5vw;
    font-weight: 400;
    line-height: 1.4;
    @media screen and (max-width: 768px) {
        font-size: 4vw;
        font-weight: 500;
    }
`
const HeadTitle = styled.div`
    margin-left: 4vw;
    width: 35vw;
    h1 {
        font-size: 3vw;
        text-transform: uppercase;
    }
    span {
        font-size: 1.2vw;
        font-weight: 500;
        display: flex;
        justify-content: right;
        margin-right: 6.7vw;
        font-family: "Bai Jamjuree", sans-serif;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        margin-left: 0vw;
        h1 {
            font-size: 4vw;
            text-transform: uppercase;
        }
        span {
            font-size: 3vw;
            font-weight: 500;
            display: flex;
            justify-content: right;
            margin-right: 0rem;
        }
    }
`
const About = () => {
    AOS.init();
    return (
        <Container id="about">
            <NumberTitle>
                <span>01/</span>
            </NumberTitle>
            <HeadTitle className='Title' data-aos="fade-down">
                <h1>Hello i'm Dominik</h1>
            </HeadTitle>
            <TextContainer data-aos="fade-up">
                <Span1 className='TAnim'>My passion: <a href="/hobby">AUDI A4 B6</a></Span1><br />
            </TextContainer>
        </Container>
    )
}

export default About