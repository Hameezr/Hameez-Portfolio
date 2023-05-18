import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

// import Typing from "react-typing-animation";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
  FaMediumM,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    typingDiv: {
      height: "57px",
      width: "500px",
      [t.breakpoints.down("sm")]: {
        width: "100%",
        height: "50px",
      },
      [t.breakpoints.down("xs")]: {
        width: "290px",
        height: "60px",
      },
    },
    typewriterFont: {
      [t.breakpoints.down("sm")]: {
        fontSize: "1.7rem !important",
      },
      [t.breakpoints.down("xs")]: {
        fontSize: "1.9rem !important",
      },
    },
  }));

  const classes = useStyles();
  // const [titleArr, setTitleArr] = React.useState(["Full Stack Engineer", "Web Designer", "Product Engineer"]);
  // let titleArr = ["Full Stack Engineer", "Web Designer", "Product Engineer"];

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.stackOverflow && (
              <a
                href={socialsData.stackOverflow}
                target="_blank"
                rel="noreferrer"
              >
                <FaStackOverflow
                  aria-label="Stack Overflow"
                  style={{ color: theme.secondary }}
                  className="landing--social"
                />
              </a>
            )}
            {socialsData.medium && (
              <a href={socialsData.medium} target="_blank" rel="noreferrer">
                <FaMediumM
                  aria-label="Medium"
                  style={{ color: theme.secondary }}
                  className="landing--social"
                />
              </a>
            )}
            {socialsData.instagram && (
              <a
                href={socialsData.instagram}
                target="_blank"
                rel="noreferrer"
                className={classes.socialIcon}
              >
                <FaInstagram
                  aria-label="Instagram"
                  style={{ color: theme.secondary }}
                  className="landing--social"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6>{`Hi, I am ${headerData.name} and I'm a `}</h6>
            <div className={classes.typingDiv}>
              <h1 className={classes.typewriterFont}>Full Stack Engineer</h1>
              {/* <Typing loop hideCursor>
                {titleArr.map((item) => (
                  <>
                    <Typing.Speed ms={20} />
                    <h1 className={classes.typewriterFont}>{item}</h1>
                    <Typing.Delay ms={500} />
                    <Typing.Backspace count={20} />
                  </>
                ))}
              </Typing> */}
            </div>
            <p style={{ 'white-space': 'pre-wrap' }}>{headerData.desciption}</p>
            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download={headerData.downloadName}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes.resumeBtn}>Download CV</Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
