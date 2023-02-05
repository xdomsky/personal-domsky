import React from 'react';
import Landing from "./Landing/Landing";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Works from "./Works/Works";
import styled from 'styled-components';

const Container = styled.div`
padding: 0 48px;
`

const Home = () => {
    return (
        <>
            <Landing />
            <Container>
                <About />
                <Works />
                <Contact />
            </Container>
        </>
    )
}

export default Home