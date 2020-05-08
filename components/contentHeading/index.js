import React from "react";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  serviceSectionTitle: {
    "&:before": {
      left: 40,
      height: 81
    }
  },
  mainTitleLine: {
    "&:before": {
      height: "130px !important",
      left: 40
    }
  },
  commonLine: {
    letterSpacing: 10,
    marginBottom: 15,
    position: "relative",
    textTransform: "upperCase",
    "&:before": {
      content: `''`,
      height: 81,
      position: "absolute",
      bottom: "100%",
      width: 2,
      background: "#252f6a"
    }
  },
  commonTitleSection: {
    "&:before": {
      left: 0,
      right: 0,
      height: 81,
      margin: "0 auto"
    }
  },
  commonCenterTitle: {
    textAlign: "center",
    maxWidth: "90%",
    width: "100%"
  },
  "@media (max-width: 1024px)": {
    commonCenterTitle: {
      maxWidth: "100%"
    }
  },
  "@media (max-width: 991px)": {
    commonLine: {
      letterSpacing: 3,
      marginBottom: "10px",
      "&:before": {
        height: 50
      }
    },
    commonTitleSection: {
      "&:before": {
        height: 50
      }
    },
    mainTitleLine: {
      "&:before": {
        height: "85px !important"
      }
    }
  },
  "@media (max-width: 767px)": {
    commonLine: {
      letterSpacing: 3,
      marginBottom: "10px",
      "&:before": {
        height: 30
      }
    },
    commonTitleSection: {
      "&:before": {
        height: 30
      }
    },
    mainTitleLine: {
      "&:before": {
        height: "55px !important"
      }
    }
  }
}));

function Hero({ type, heading, content }) {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h5"
        className={clsx(classes.commonLine, {
          [classes.mainTitleLine]: type === "mainTitle",
          [classes.serviceSectionTitle]: type === "ServiceSection",
          [classes.commonTitleSection]: type === "commonTitle"
        })}
      >
        {heading}
      </Typography>
      {type === "commonTitle" ? (
        <Typography
          variant="h3"
          color="primary"
          className={classes.commonCenterTitle}
        >
          {content}
        </Typography>
      ) : (
        <Typography variant="h3" color="primary">
          {content}
        </Typography>
      )}
    </>
  );
}
export default Hero;
