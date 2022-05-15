import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  staggerRevealClose
} from "./Animations";

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      href="/#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      href="/#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      href="/#works">
                      Works
                    </a>
                  </li>
                  <li>
                    <a
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line4 = el)}
                      href="/#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="locations">
                <span>
                  <a href="https://github.com/xdomsky">Github</a>
                </span>
                <span>
                  <a href="https://www.instagram.com/xdomskyy/">Instagram</a>
                </span>
                <span>
                  <a href="https://twitter.com/xdomsky">Twitter</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
