import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../../utils/Split3.min";

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
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const split = new SplitText(".TAnim");
        const split2 = new SplitText(".TAnim2");
        gsap.fromTo(split.lines, {
            duration: 1,
            y: "100%",
            opacity: 0,
        },
            {
                scrollTrigger: ".TAnim",
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
            });


        gsap.fromTo(split2.lines, {
            duration: 1,
            y: "100%",
            opacity: 0,
        },
            {
                scrollTrigger: ".TAnim2",
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                delay: 1
            });

        gsap.fromTo('.Title', {
            opacity: 0,
            y: "-100%",
        },
            {
                scrollTrigger: ".Title",
                opacity: 1,
                y: 0,
                duration: 1,
            });
    }, []);
    return (
        <Container id="about">
            <NumberTitle>
                <span>01/</span>
            </NumberTitle>
            <HeadTitle className='Title'>
                <h1>Hello i'm Dominik</h1>
                <span>Dominik Dąbrowski</span>
            </HeadTitle>
            <TextContainer>
                <Span1 className='TAnim'>PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.</Span1><br />
                <Span2 className='TAnim2'>WHEN I'M NOT BUILDING OR EXPLORING NEW WEB EXPERIENCES, I'M PROBABLY PLAYING GAMES OR WATCHING NETFLIX.</Span2>
            </TextContainer>
        </Container>
    )
}

export default About