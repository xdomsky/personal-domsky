import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Hobby from "./pages/Hobby/Hobby";
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar/Header";
import styled from 'styled-components';
import { gsap, Power3 } from 'gsap';

const Container = styled.div`
    position: fixed;
    bottom: 5%;
    right: 3%;
    z-index: 10;
    mix-blend-mode: difference;
    @media screen and (max-width: 768px) {
        right: 5%;
    }
`
const FooterFix = styled.div`

`
const Scroll = styled.div`
    color: var(--main-color);
    font-size: 1.5em;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
    &:hover {
        transform: scale(1.1);
    }
`

function App() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  let tl = new gsap.timeline();
  let ease = Power3.easeInOut();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/hobby" component={Hobby} />
          <Route component={Page404} />
        </Switch>
        <FooterFix>
          <Container>
            <Scroll onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} >
              ( BACK TO TOP )
            </Scroll>
          </Container>
        </FooterFix>
      </Router>
    </div>
  );
}

export default App;
