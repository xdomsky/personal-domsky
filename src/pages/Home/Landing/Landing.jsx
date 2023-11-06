import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.section`
    height: 100%;
`
const Contact = styled.div`
    display: flex;
    justify-content: right;
    margin: 5vw 5vw;
    align-items: center;
    a {
        text-decoration: none;
        color: var(--main-color);
    }
`
const BtnSign = styled.button`
    border: 2px solid var(--main-color);
    color: var(--main-color);
    background: transparent;
    outline: none;
    padding: 10px 20px;
    font-size: 1.5rem;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    -webkit-transition: color 0.3s;
    -o-transition: color 0.3s;
    -moz-transition: color 0.3s;
    transition: color 0.3s;
    @media screen and (max-width: 768px) {
        padding: 5px 15px;
        font-size: 1rem;
        white-space: nowrap;
        -webkit-transition: color 0s;
        -o-transition: color 0s;
        -moz-transition: color 0s;
        transition: color 0s;
    }
`
const BtnBound = styled.div`
    display: block;
    overflow: hidden;
    span {
        padding: 0 22px;
    }
    span {
        &:hover {
            position: relative;
            display: inline-block;
            -webkit-animation: wt-btn_sign-marquee 1s linear infinite;
            -moz-animation: wt-btn_sign-marquee 1s linear infinite;
            -o-animation: wt-btn_sign-marquee 1s linear infinite;
            animation: wt-btn_sign-marquee 1s linear infinite;
        }
    }
    span {
        &:after {
            content: attr(data-text);
            position: absolute;
            left: 100%;
            padding: 0 23px;
        }
    }
    @media screen and (max-width: 768px) {
        span {
            &:hover {
                position: relative;
                display: inline-block;
                -webkit-animation: wt-btn_sign-marquee 0s linear infinite;
                -moz-animation: wt-btn_sign-marquee 0s linear infinite;
                -o-animation: wt-btn_sign-marquee 0s linear infinite;
                animation: wt-btn_sign-marquee 0s linear infinite;
            }
        }
        span {
            padding: 0 22px;
        }
        span {
            &:after {
                display: none;
            }
        }
    }
`
const Landing = () => {
    AOS.init();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');

    let width = window.innerWidth;

    function handleMouseMove(e) {
        let normalizedPosition = e.pageX / (width / 2) - 1;
        let speedSlow = 100 * normalizedPosition;
        let speedFast = 200 * normalizedPosition;
        spansSlow.forEach((span) => {
            span.style.transform = `translate(${speedSlow}px)`;
        });
        spansFast.forEach((span) => {
            span.style.transform = `translate(${speedFast}px)`
        })
    }
    function handleWindowResize() {
        width = window.innerWidth;
    }
    return (
        <Container id="home">
            <div className="wrap TextAnim" data-aos="zoom-in" data-aos-duration="1500">
                <div className="line">
                    <div className="left">
                        <div className="content">
                            <span className="spanSlow">CREATIVE</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="content">
                            <span className="spanSlow">CREATIVE</span>
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="left">
                        <div className="content">
                            <span className="spanSlow">DESIGNER</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="content">
                            <span className="spanSlow">DESIGNER</span>
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="left">
                        <div className="content">
                            <span className="spanFast">DEVELOPER</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="content">
                            <span className="spanFast">DEVELOPER</span>
                        </div>
                    </div>
                </div>
            </div>
            <Contact>
                <a href="/contact">
                    <BtnSign>
                        <BtnBound>
                            <span data-width="#fff" data-text="Contact me">Contact me</span>
                        </BtnBound>
                    </BtnSign>
                </a>
            </Contact>
        </Container>
    )
}

export default Landing