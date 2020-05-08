import React from "react";
import { ReactComponent as WhiteLogo } from "../../assests/whiteLogo/civyWhite.svg";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Fb } from "../../assests/common/social/fb.svg";
import { ReactComponent as Insta } from "../../assests/common/social/insta.svg";
import { ReactComponent as Twitter } from "../../assests/common/social/twitter.svg";
import { ReactComponent as Linkedin } from "../../assests/common/social/linkedin.svg";
import { ReactComponent as Mail } from "../../assests/common/social/mail.svg";
import { ReactComponent as Phone } from "../../assests/common/social/phone.svg";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import useGobalStyle from "@common-styles";
import Link from "@material-ui/core/Link";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  footerWarpper: {
    background: "#252f6a",
    padding: "40px 0 10px"
  },
  footerLogo: {
    minWidth: "240px"
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
    paddingBottom: 35,
    borderBottom: "1px rgba(255, 255, 255, 0.05) solid"
  },
  socialItem: {
    margin: "0 7px",
    display: "flex",
    "& svg": {
      transition: "all 300ms",
      transform: "scale(1)"
    },
    "&:hover": {
      transform: "scale(1.175)"
    }
  },
  infoItem: {
    color: "#ffffff",
    display: "inline-block",
    verticalAlign: "top",
    marginLeft: 10,
    letterSpacing: 2,
    "&:hover": {
      color: "#ffffff",
      textDecoration: "none"
    }
  },
  iconLink: {
    display: "inline-block",
    verticalAlign: "middle",
    marginLeft: 15,
    "&:first-child": {
      marginLeft: 0
    }
  },
  pageLinks: {
    textAlign: "center",
    margin: "10px 0"
  },
  pageItem: {
    color: "#ffffff",
    letterSpacing: 2,
    margin: "0 3px",
    "&:hover": {
      color: "#ffffff",
      textDecoration: "none"
    }
  },
  spaneLine: {
    color: "#ffffff"
  },
  copyRightText: {
    color: "#ffffff",
    textAlign: "center",
    margin: 0,
    letterSpacing: 2
  },
  footerInfo: {
    fontSize: "1.1rem",
    textAlign: "center"
  },
  footerBottonText: {
    fontSize: "0.75rem",
    lineHeight: "18px",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: 300,
    "& a": {
      color: "#ffffff",
      fontWeight: 500,
      "&:hover": {
        textDecoration: "none"
      }
    }
  },
  backToTop: {
    position: "fixed",
    bottom: 20,
    right: 20,
    background: "#fff",
    width: "46px",
    height: "46px",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    overflow: "hidden",
    boxShadow: "0px 3px 4px rgba(0,0,0,0.16)",
    zIndex: 9,
    "&:before": {
      width: "42px",
      height: "42px",
      content: `''`,
      border: "2px solid #252f6a",
      borderRadius: "50%",
      position: "absolute",
      top: 2,
      left: 2
    }
  },
  topIcon: {
    position: "relative",
    display: "flex",
    margin: "0 auto",
    textAlign: "center",
    animation: "$backToTop 2s infinite",
    "& svg": {
      fontSize: "2.5rem",
      transition: "all 400ms"
    }
  },
  "@keyframes backToTop": {
    "0": { transform: "translateY(0)" },
    "20%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(0)" },
    "80%": { transform: "translateY(0)" },
    "100%": { transform: "translateY(0)" },
    "40%": { transform: "translateY(-10px)" },
    "60%": { transform: "translateY(-5px)" }
  },
  "@media (max-width: 1280px)": {
    backToTop: {
      bottom: 60
    }
  },
  "@media (max-width: 1024px)": {
    footerInfo: {
      fontSize: "1rem"
    },
    copyRightText: {
      fontSize: "1rem"
    }
  },
  "@media (max-width: 991px)": {
    footerWarpper: {
      padding: "30px 0 0"
    },
    footerContent: {
      flexDirection: "column",
      marginBottom: 25,
      paddingBottom: 25
    },
    footerLogo: {
      minWidth: "auto",
      maxWidth: "200px",
      marginBottom: 20
    },
    footerInfo: {
      order: 1,
      marginTop: 15
    },
    pageLinks: {
      margin: "0px 0 7px"
    }
  },
  "@media (max-width: 767px)": {
    footerWarpper: {
      padding: "15px 0 50px"
    },
    footerLogo: {
      maxWidth: "160px"
    },
    footerInfo: {
      fontSize: "0.87rem"
    },
    backToTop: {
      bottom: 10,
      right: 10,
      transform: "scale(0.85)",
      transformOrigin: "right bottom",
      "&:before": {
        width: "40px",
        height: "40px",
        top: 3,
        left: 3
      }
    }
  },
  "@media (max-width: 479px)": {
    spaneLine: {
      display: "none"
    },
    pageLinks: {
      display: "flex",
      flexDirection: "column",
      margin: "5px 0 15px"
    }
  },
  "@media (max-width: 320px)": {
    footerInfo: {
      textAlign: "center"
    },
    pageItem: {
      letterSpacing: "1px",
      margin: "0 1px"
    },
    iconLink: {
      marginLeft: 0
    }
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

function Footer(props) {
  const classes = { ...useGobalStyle(), ...useStyles() };
  return (
    <React.Fragment>
      <div className={classes.footerWarpper}>
        <Container maxWidth="lg">
          <div className={classes.footerContent}>
            <NavLink to="/" className={classes.pageItem}>
              <WhiteLogo className={classes.footerLogo} />
            </NavLink>
            <div className={classes.footerInfo}>
              <div className={classes.infoLinks}>
                <div className={classes.iconLink}>
                  <Phone />
                  <Link
                    href="tel: +1 949 524 2292"
                    className={clsx(classes.infoItem, classes.borderBottom)}
                  >
                    {" "}
                    +1 949 524 2292
                  </Link>
                </div>
                <div className={classes.iconLink}>
                  <Mail style={{ margin: "-3px 0 0" }} />
                  <Link
                    href="mailto:info@civy.co"
                    className={clsx(classes.infoItem, classes.borderBottom)}
                  >
                    info@civy.co
                  </Link>
                </div>
              </div>
              <div className={classes.pageLinks}>
                <Link
                  href="https://www.superbcrew.com/icommunis-helps-governments-and-cities-improve-their-community-engagement-across-infrastructure-projects/"
                  className={clsx(classes.pageItem, classes.borderBottom)}
                >
                  <FormattedMessage id="footer_media" defaultMessage="Media" />
                </Link>
                <Typography
                  variant="body1"
                  component="span"
                  className={classes.spaneLine}
                >
                  {" "}
                  |{" "}
                </Typography>
                <NavLink
                  to={{ pathname: "/privacy", state: { name: "tearms" } }}
                  className={clsx(classes.pageItem, classes.borderBottom)}
                >
                  <FormattedMessage
                    id="footer_terms_title"
                    defaultMessage="Terms of Use"
                  />
                </NavLink>
                <Typography
                  variant="body1"
                  component="span"
                  className={classes.spaneLine}
                >
                  {" "}
                  |{" "}
                </Typography>
                <NavLink
                  to={{ pathname: "/privacy", state: { name: "privacy" } }}
                  className={clsx(classes.pageItem, classes.borderBottom)}
                >
                  <FormattedMessage
                    id="footer_privacy_title"
                    defaultMessage="Privacy Policy"
                  />
                </NavLink>
                <Typography
                  variant="body1"
                  component="span"
                  className={classes.spaneLine}
                >
                  {" "}
                  |{" "}
                </Typography>
                <NavLink
                  to="/contact-us"
                  className={clsx(classes.pageItem, classes.borderBottom)}
                >
                  <FormattedMessage
                    id="footer_contactus_title"
                    defaultMessage="Contact Us"
                  />
                </NavLink>
              </div>
              <Typography variant="subtitle1" className={classes.copyRightText}>
                &copy; Civy {new Date().getFullYear()}
              </Typography>
            </div>
            <Box
              display="flex"
              alignItems="center"
              className={classes.footerSocial}
            >
              <Link
                href="https://www.facebook.com/civyengage/"
                className={classes.socialItem}
              >
                <Fb />
              </Link>
              <Link
                href="https://twitter.com/civyengage"
                className={classes.socialItem}
              >
                <Twitter />
              </Link>
              <Link
                href="https://www.instagram.com/civyengage/"
                className={classes.socialItem}
              >
                <Insta />
              </Link>
              <Link
                href="https://www.linkedin.com/company/civyengage"
                className={classes.socialItem}
              >
                <Linkedin />
              </Link>
            </Box>
          </div>
          <Typography variant="subtitle1" className={classes.footerBottonText}>
            <FormattedMessage
              id="footer_google_translate_message"
              defaultMessage="Civy utilizes the Google Translate services to assist you in viewing
            the Civy platform in languages other than English. Google Translate
            cannot translate all types of texts and sentences and hence may not
            provide an exact translation. For any queries contact us at"
            />{" "}
            <Link className={classes.borderBottom} href="mailto:info@civy.com">
              info@civy.com
            </Link>
          </Typography>
        </Container>
      </div>
      <ScrollTop {...props}>
        <div className={classes.backToTop}>
          <div className={classes.topIcon}>
            <ExpandLessIcon />
          </div>
        </div>
      </ScrollTop>
    </React.Fragment>
  );
}
export default Footer;
