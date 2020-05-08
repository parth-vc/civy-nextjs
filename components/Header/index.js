import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import LogoHeader from "../../assests/mainLogo/civy.png";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { NavLink } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import Token from "@util/token";
import HeaderDrawer from "./HeaderDrawer";
import { onLangChange } from "../../store/action";
import { FormattedMessage } from "react-intl";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import { ReactComponent as Us } from "../../assests/common/flag/us.svg";
import { ReactComponent as France } from "../../assests/common/flag/france.svg";
import { ReactComponent as Spain } from "../../assests/common/flag/spain.svg";
import { ReactComponent as India } from "../../assests/common/flag/india.svg";
import { ReactComponent as China } from "../../assests/common/flag/china.svg";
import { ReactComponent as Italy } from "../../assests/common/flag/italy.svg";
import { ReactComponent as Vietnam } from "../../assests/common/flag/vietnam.svg";
const useStyles = makeStyles(() => ({
  sideBarIcon: {
    padding: 0,
    color: "black",
    cursor: "pointer"
  },
  headerMain: {
    background: "#ffffff"
  },
  headerInner: {
    background: "transparent",
    boxShadow: "none"
  },
  logoImg: {
    width: "100px",
    display: "block"
  },
  headerOuter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerNav: {
    padding: 0,
    minHeight: "auto"
  },
  menuItem: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "0.93rem",
    letterSpacing: 1,
    lineHeight: "80px",
    display: "inline-block",
    position: "relative",
    marginLeft: 50,
    color: "#252f6a",
    outline: 0,
    "&:first-child": {
      marginLeft: 0
    },
    "&:before": {
      content: `''`,
      position: "absolute",
      top: 0,
      background: "#252f6a",
      height: 0,
      transition: "all 300ms",
      width: "100%",
      left: 0,
      opacity: 0
    },
    "&:after": {
      content: `''`,
      position: "absolute",
      top: -10,
      left: 0,
      borderTop: "8px solid #252f6a",
      background: "transparent",
      borderLeft: "8px solid transparent",
      transform: "rotate(135deg)",
      margin: "auto",
      right: 0,
      width: "8px",
      height: "8px",
      opacity: 0,
      transition: "all 300ms"
    },
    "&.active": {
      textDecoration: "none",
      "&:before": {
        height: 3,
        opacity: 1,
        transitionDelay: "100ms"
      },
      "&:after": {
        opacity: 1,
        top: -1,
        transitionDelay: "200ms"
      }
    }
  },
  headerLast: {
    marginLeft: 60,
    display: "flex"
  },
  loginText: {
    padding: "0 20px",
    background: "#252f6a",
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "0.93rem",
    letterSpacing: 1,
    lineHeight: "80px",
    display: "inline-block",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "none",
      color: "#ffffff"
    }
  },
  listItem: {
    width: 250,
    background: "#eff0f3",
    height: "100vh",
    paddingTop: 25
  },
  menuItemRoot: {
    "& span": {
      fontWeight: "600",
      minWidth: "20px",
      fontSize: "1rem",
      overflow: "hidden",
      textTransform: "uppercase"
    },
    "& svg": {
      marginLeft: 10
    }
  },
  "@media (min-width:1200px)": {
    menuItem: {
      "&:hover": {
        textDecoration: "none",
        "&:before": {
          height: 3,
          opacity: 1,
          transitionDelay: "100ms"
        },
        "&:after": {
          opacity: 1,
          top: -1,
          transitionDelay: "200ms"
        }
      }
    }
  },
  "@media (max-width:1024px)": {
    menuItem: {
      marginLeft: 25,
      fontSize: "0.87rem"
    },
    headerLast: {
      marginLeft: 30
    },
    loginText: {
      fontSize: "0.87rem",
      padding: "0 15px"
    }
  },
  "@media (max-width:991px)": {
    headerNav: {
      width: "100%"
    },
    menuItem: {
      margin: 0,
      padding: "0 20px",
      lineHeight: "50px",
      marginBottom: 10,
      display: "block",
      textDecoration: "none",
      "&.active": {
        "&:before": {
          width: 5,
          height: "100%",
          transitionDelay: "0.4s"
        },
        "&:after": {
          left: 0,
          transitionDelay: "0.6s",
          transform: "translateY(-50%) rotate(45deg)",
          transformOrigin: 0,
          margin: "-4px 0 0",
          top: "50%"
        }
      }
    },
    drawerPaper: {
      background: "red"
    },
    logoOuter: {
      padding: "5px 0"
    }
  },
  "@media (max-width:767px)": {
    loginText: {
      lineHeight: "60px",
      padding: "0 15px"
    }
  }
}));
const BootstrapInput = withStyles(() => ({
  root: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
    marginRight: 15,
    "& i": {
      color: "#252f6a",
      fontSize: "1.5rem",
      fontWeight: 600,
      transition: "all 300ms",
      cursor: "pointer"
    },
    "@media (max-width:991px)": {
      margin: 0,
      padding: "0 25px",
      background: "#eff0f3",
      borderBottom: "1px #e1e1e1 solid",
      "& i": {
        right: 17,
        position: "relative"
      }
    }
  }
}))(InputBase);

const CommonSelect = withStyles({
  selectMenu: {
    color: "#252f6a",
    padding: "0 25px 0 0 !important",
    position: "relative",
    fontSize: 0,
    height: "80px",
    lineHeight: "80px",
    display: "flex",
    alignItems: "center",
    "& svg": {
      fontSize: "1.125rem"
    },
    "@media (max-width:991px)": {
      height: "60px",
      lineHeight: "60px",
      width: "40px"
    }
  },
  select: {
    "&:focus": {
      backgroundColor: "inherit"
    }
  }
})(Select);

/* Code for hide and show header*/

function HideOnScroll(props) {
  const { children, threshold = 0, window } = props;
  let trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold
  });
  return (
    <>
      <Slide appear={false} direction="down" in={trigger}>
        {children}
      </Slide>
    </>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

const lang = [
  {
    name: <FormattedMessage id="header_language1" defaultMessage="EN" />,
    value: "en",
    ImgIcon: <Us />
  },
  {
    name: <FormattedMessage id="header_language2" defaultMessage="FR" />,
    value: "fr",
    ImgIcon: <France />
  },
  {
    name: <FormattedMessage id="header_language3" defaultMessage="ES" />,
    value: "es",
    ImgIcon: <Spain />
  },
  {
    name: <FormattedMessage id="header_language4" defaultMessage="HI" />,
    value: "hi",
    ImgIcon: <India />
  },
  {
    name: <FormattedMessage id="header_language5" defaultMessage="ZH" />,
    value: "zhs",
    ImgIcon: <China />
  },
  {
    name: <FormattedMessage id="header_language6" defaultMessage="IT" />,
    value: "it",
    ImgIcon: <Italy />
  },
  {
    name: <FormattedMessage id="header_language7" defaultMessage="VI" />,
    value: "vi",
    ImgIcon: <Vietnam />
  }
];

// Code for Fix Header

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};
// End Code for Fix Header

function Header(props) {
  const classes = useStyles();
  let [activeClass, setActive] = useState(classes.headerInner);
  const [drawer, setDrawer] = useState(false);
  const [drawerActivate, setDrawerActive] = useState(false);

  const checkWindowHeight = () => {
    if (window.pageYOffset >= 100) {
      setActive(classes.headerMain);
    } else {
      setActive(classes.headerInner);
    }
  };

  useEffect(() => {
    checkWindowHeight();
    window.addEventListener("scroll", checkWindowHeight);
    return () => {
      window.removeEventListener("scroll", checkWindowHeight);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 991) {
      setDrawerActive(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 991) {
        setDrawerActive(true);
      } else {
        setDrawerActive(false);
      }
    });
  }, []);
  const dispatch = useDispatch();
  const language = window.localStorage.getItem("lan");
  const handleLangChange = event => {
    const { value } = event.target;
    dispatch(onLangChange(value));
    window.localStorage.setItem("lan", value);
    window.location.reload();
  };

  //Click on Logo then page is scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const HeaderMenu = () => (
    <>
      <NavLink
        exact
        to="/"
        className={classes.menuItem}
        activeClassName={classes.active}
      >
        <FormattedMessage id="header_home" defaultMessage="HOME" />
      </NavLink>
      <NavLink
        to="/services"
        className={classes.menuItem}
        activeClassName={classes.active}
      >
        <FormattedMessage id="header_service" defaultMessage="SERVICES" />
      </NavLink>
      <NavLink
        to={{ pathname: "/projects", state: { name: "projects" } }}
        className={classes.menuItem}
        activeClassName={classes.active}
      >
        <FormattedMessage id="header_project" defaultMessage="PROJECTS" />
      </NavLink>
      <NavLink
        to="/thought-leadership"
        className={classes.menuItem}
        activeClassName={classes.active}
      >
        <FormattedMessage
          id="header_thought_leadership"
          defaultMessage="THOUGHT LEADERSHIP"
        />
      </NavLink>

      <NavLink
        to="/about"
        className={classes.menuItem}
        activeClassName={classes.active}
      >
        <FormattedMessage id="header_about" defaultMessage="ABOUT" />
      </NavLink>
    </>
  );
  // Small Screen
  const createDrawer = () => {
    return (
      <>
        <AppBar className={classes.headerMain}>
          <Container maxWidth="lg">
            <div className={classes.headerOuter}>
              <Toolbar className={classes.headerNav}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  className={classes.containerDiv}
                >
                  <MenuIcon
                    className={classes.sideBarIcon}
                    onClick={() => {
                      setDrawer(true);
                    }}
                  />
                  <NavLink to="/" className={classes.logoOuter}>
                    <img
                      src={LogoHeader}
                      alt="civy"
                      className={classes.logoImg}
                    />
                  </NavLink>
                  <Box display="flex">
                    {Token.getToken() ? (
                      <HeaderDrawer />
                    ) : (
                      <NavLink to="/login" className={classes.loginText}>
                        <FormattedMessage
                          id="header_login"
                          defaultMessage="LOGIN"
                        />
                      </NavLink>
                    )}
                  </Box>
                </Grid>
              </Toolbar>
            </div>
          </Container>
        </AppBar>
        <SwipeableDrawer
          open={drawer}
          onClose={() => {
            setDrawer(false);
          }}
          onOpen={() => {
            setDrawer(true);
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              setDrawer(false);
            }}
            onKeyDown={() => {
              setDrawer(false);
            }}
          >
            <CommonSelect
              disableUnderline
              color="Primary"
              value={language === null ? "en" : language}
              input={<BootstrapInput />}
              onChange={handleLangChange}
              IconComponent={props => (
                <i {...props} className={`material-icons ${props.className}`}>
                  expand_more
                </i>
              )}
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: "bottom"
                }
              }}
            >
              {lang.map(({ name, value, ImgIcon }) => (
                <MenuItem
                  key={value}
                  value={value}
                  classes={{
                    root: classes.menuItemRoot,
                    selected: classes.menuItemSelected
                  }}
                >
                  <span>{name}</span> {ImgIcon}
                </MenuItem>
              ))}
            </CommonSelect>
            <List className={classes.listItem}>
              <HeaderMenu />
            </List>
          </div>
        </SwipeableDrawer>
      </>
    );
  };

  //Large Screen
  const destroyDrawer = () => {
    return (
      <>
        {props.type === "inner" ? (
          <AppBar id="header" className={activeClass}>
            <Container maxWidth="lg">
              <div className={classes.headerOuter}>
                <div className={classes.logoOuter}>
                  <NavLink to="/">
                    <img
                      src={LogoHeader}
                      alt="civy"
                      className={classes.logoImg}
                    />
                  </NavLink>
                </div>
                <Toolbar className={classes.headerNav}>
                  <div className={classes.menuItems}>
                    <HeaderMenu />
                  </div>
                  <div className={classes.headerLast}>
                    <CommonSelect
                      disableUnderline
                      color="Primary"
                      value={language === null ? "en" : language}
                      input={<BootstrapInput />}
                      onChange={handleLangChange}
                      IconComponent={props => (
                        <i
                          {...props}
                          className={clsx(
                            `material-icons ${props.className}`,
                            `downIcon ${props.className}`
                          )}
                        >
                          expand_more
                        </i>
                      )}
                      MenuProps={{
                        getContentAnchorEl: null,
                        anchorOrigin: {
                          vertical: "bottom"
                        }
                      }}
                    >
                      {lang.map(({ name, value, ImgIcon }) => (
                        <MenuItem
                          key={value}
                          value={value}
                          classes={{
                            root: classes.menuItemRoot,
                            selected: classes.menuItemSelected
                          }}
                        >
                          <span>{name}</span> {ImgIcon}
                        </MenuItem>
                      ))}
                    </CommonSelect>
                    {Token.getToken() ? (
                      <HeaderDrawer />
                    ) : (
                      <NavLink to="/login" className={classes.loginText}>
                        <FormattedMessage
                          id="header_login"
                          defaultMessage="LOGIN"
                        />
                      </NavLink>
                    )}
                  </div>
                </Toolbar>
              </div>
            </Container>
          </AppBar>
        ) : props.type === "fixed" ? (
          <ElevationScroll {...props}>
            <AppBar id="header" className={classes.headerMain}>
              <Container maxWidth="lg">
                <div className={classes.headerOuter}>
                  <div className={classes.logoOuter}>
                    <NavLink to="/">
                      <img
                        onClick={scrollToTop}
                        src={LogoHeader}
                        alt="civy"
                        className={classes.logoImg}
                      />
                    </NavLink>
                  </div>
                  <Toolbar className={classes.headerNav}>
                    <div className={classes.menuItems}>
                      <HeaderMenu />
                    </div>
                    <div className={classes.headerLast}>
                      <CommonSelect
                        disableUnderline
                        color="Primary"
                        value={language === null ? "en" : language}
                        input={<BootstrapInput />}
                        onChange={handleLangChange}
                        IconComponent={props => (
                          <i
                            {...props}
                            className={`material-icons ${props.className}`}
                          >
                            expand_more
                          </i>
                        )}
                        MenuProps={{
                          getContentAnchorEl: null,
                          anchorOrigin: {
                            vertical: "bottom"
                          }
                        }}
                      >
                        {lang.map(({ name, value, ImgIcon }) => (
                          <MenuItem
                            key={value}
                            value={value}
                            classes={{
                              root: classes.menuItemRoot,
                              selected: classes.menuItemSelected
                            }}
                          >
                            <span>{name}</span> {ImgIcon}
                          </MenuItem>
                        ))}
                      </CommonSelect>
                      {Token.getToken() ? (
                        <HeaderDrawer />
                      ) : (
                        <NavLink to="/login" className={classes.loginText}>
                          <FormattedMessage
                            id="header_login"
                            defaultMessage="LOGIN"
                          />
                        </NavLink>
                      )}
                    </div>
                  </Toolbar>
                </div>
              </Container>
            </AppBar>
          </ElevationScroll>
        ) : (
          <HideOnScroll threshold={80} {...props}>
            <AppBar id="header" className={classes.headerMain}>
              <Container maxWidth="lg">
                <div className={classes.headerOuter}>
                  <div className={classes.logoOuter}>
                    <NavLink to="/">
                      <img
                        onClick={scrollToTop}
                        src={LogoHeader}
                        alt="civy"
                        className={classes.logoImg}
                      />
                    </NavLink>
                  </div>
                  <Toolbar className={classes.headerNav}>
                    <div className={classes.menuItems}>
                      <HeaderMenu />
                    </div>
                    <div className={classes.headerLast}>
                      <CommonSelect
                        disableUnderline
                        color="Primary"
                        value={language === null ? "en" : language}
                        input={<BootstrapInput />}
                        onChange={handleLangChange}
                        IconComponent={props => (
                          <i
                            {...props}
                            className={`material-icons ${props.className}`}
                          >
                            expand_more
                          </i>
                        )}
                        MenuProps={{
                          getContentAnchorEl: null,
                          anchorOrigin: {
                            vertical: "bottom"
                          }
                        }}
                      >
                        {lang.map(({ name, value, ImgIcon }) => (
                          <MenuItem
                            key={value}
                            value={value}
                            classes={{
                              root: classes.menuItemRoot,
                              selected: classes.menuItemSelected
                            }}
                          >
                            <span>{name}</span> {ImgIcon}
                          </MenuItem>
                        ))}
                      </CommonSelect>
                      {Token.getToken() ? (
                        <HeaderDrawer />
                      ) : (
                        <NavLink to="/login" className={classes.loginText}>
                          <FormattedMessage
                            id="header_login"
                            defaultMessage="LOGIN"
                          />
                        </NavLink>
                      )}
                    </div>
                  </Toolbar>
                </div>
              </Container>
            </AppBar>
          </HideOnScroll>
        )}
      </>
    );
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      {drawerActivate ? createDrawer() : destroyDrawer()}
    </div>
  );
}
Header.propTypes = {
  classes: PropTypes.object
};
export default Header;
