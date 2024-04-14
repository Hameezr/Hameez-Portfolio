import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Typography, Box } from "@material-ui/core";

import { ThemeContext } from "../../contexts/ThemeContext";

import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";

import "./Experience.css";

function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
  details,
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
        height: "100%",
      },
    },
    dot: {
      height: "10px",
      width: "10px",
      backgroundColor: "#eaeaeacc",
      borderRadius: "50%",
      display: "inline-block",
      marginRight: "6px",
      marginTop: "4px",
      flexShrink: 0,
    },
  }));
  const [isShown, setIsShown] = React.useState(false);

  const classes = useStyles();

  return (
    <Fade bottom>
      <div
        key={id}
        className={`experience-card ${classes.experienceCard}`}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === "light" ? expImgBlack : expImgWhite}
            alt=""
          />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
          {isShown
            ? details.map((item) => (
              <Box display="flex" alignItems="center">
              <span className={classes.dot}></span>
              <Typography variant="subtitle2" style={{ color: theme.tertiary80, margin: '5px 0' }}>
                {item}
              </Typography>
            </Box>
              ))
            : null}
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
