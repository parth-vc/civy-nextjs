import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "./innerpage-banner.jpg";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  innerBanner: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center"
  },
  bannerHeading: {
    position: "absolute"
  },
  bannerText: {
    textShadow: "0px 1px 20px rgba(0,0,0,0.15)",
    textTransform: "upperCase"
  },
  bannerImg: {
    maxWidth: "inherit"
  },
  "@media (max-width:767px)": {
    innerBanner: {
      padding: "60px 15px 0",
      textAlign: "center"
    },
    bannerImg: {
      height: 250
    }
  }
}));

export default function Index(props) {
  const classes = useStyles();
  return (
    <div className={classes.innerBanner} id="back-to-top-anchor">
      <img src={Banner} alt="banner" className={classes.bannerImg} />
      <div className={classes.bannerHeading}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            color="primary"
            className={classes.bannerText}
          >
            {props.name}
          </Typography>
        </Container>
      </div>
    </div>
  );
}
