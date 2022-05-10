import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./style.css";
import gsap from "gsap";

const Header = ({ history }) => {
  useEffect(() => {
    gsap.fromTo('.logo', {
      opacity: 0,
      x: -100
    },
      {
        opacity: 1,
        x: 0,
        duration: 1
      });
    gsap.fromTo('.menu', {
      opacity: 0,
      x: 100
    },
      {
        opacity: 1,
        x: 0,
        duration: 1
      });
  }, []);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <a href="/#home">DOMSKY</a>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
