import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../assests/mainLogo/civy.png";
import Typography from "@material-ui/core/Typography";
import Banner from "./banner.jpg";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(() => ({
  scrollBehavior: "smooth",
  homeBanner: {
    backgroundImage: `url(${Banner})`,
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    textAlign: "center"
  },
  bannerTitle: {
    fontSize: "4rem",
    lineHeight: "90px",
    fontWeight: 700,
    marginTop: 15
  },
  subTitle: {
    fontSize: "2.8rem",
    fontWeight: 300,
    lineHeight: "56px",
    margin: 0,
    letterSpacing: 15,
    textTransform: "uppercase"
  },
  scrollDown: {
    width: "40px",
    height: "70px",
    bottom: 15,
    boxShadow: "inset 0 0 0 1px #252f6a",
    borderRadius: "25px",
    position: "absolute",
    left: 0,
    right: 0,
    margin: "0 auto",
    cursor: "pointer",
    "&:before": {
      content: "''",
      position: "absolute",
      left: "50%",
      width: "8px",
      height: "8px",
      background: "#252f6a",
      marginLeft: "-4px",
      top: "8px",
      borderRadius: "4px",
      WebkitAnimationDuration: "1.5s",
      animationDuration: "1.5s",
      WebkitAnimationIterationCount: "infinite",
      animationIterationCount: "infinite",
      WebkitAnimationName: "$scroll",
      animationName: "$scroll"
    }
  },
  "@-webkit-keyframes scroll": {
    "0%": { opacity: "1" },
    "100%": {
      opacity: "0",
      WebkitTransform: "translateY(46px)",
      transform: "translateY(46px)"
    }
  },
  "@keyframes scroll": {
    "0%": { opacity: "1" },
    "100%": {
      opacity: "0",
      WebkitTransform: "translateY(46px)",
      transform: "translateY(46px)"
    }
  },
  "@media (max-width:1024px)": {
    homeBanner: {
      backgroundSize: "cover",
      backgroundPosition: "top, left"
    }
  },
  "@media (max-width:991px)": {
    bannerTitle: {
      fontSize: "3rem",
      lineHeight: "70px"
    }
  },
  "@media (max-width:767px)": {
    bannerTitle: {
      fontSize: "2rem",
      lineHeight: "46px"
    },
    subTitle: {
      fontSize: "2rem",
      lineHeight: "40px",
      letterSpacing: 5
    },
    scrollDown: {
      bottom: 10,
      height: "55px",
      width: "30px"
    }
  },
  "@media screen and (max-device-width: 767px) and (orientation: landscape)": {
    homeBanner: {
      padding: "80px 0"
    }
  }
}));

function scrollWin() {
  window.scrollTo({ top: 700, behavior: "smooth" });
}
export default function Index(props) {
  const classes = useStyles();
  return (
    <div className={classes.homeBanner} id="back-to-top-anchor">
      <Container maxWidth="lg">
        <img src={Logo} alt="civy" />
        <Typography
          variant="h1"
          color="primary"
          className={classes.bannerTitle}
        >
          <FormattedMessage
            id="header_home_banner"
            defaultMessage="LEADING CIVIC ENGAGEMENT TO CREATE SMARTER CITIES"
          />
        </Typography>
        <div className={classes.scrollDown} onClick={scrollWin}></div>
      </Container>
    </div>
  );
}
