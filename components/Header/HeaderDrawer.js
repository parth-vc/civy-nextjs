import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Token from "@util/token";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  profileBtn: {
    "& button": {
      borderRadius: 0,
      lineHeight: "normal",
      padding: "0 40px 0 20px",
      height: 80,
      fontSize: "0.93rem",
      boxShadow: "none",
      position: "relative",
      textAlign: "left",
      "&:after": {
        top: -3,
        right: 15,
        width: 10,
        bottom: 0,
        height: 10,
        content: `''`,
        position: "absolute",
        borderWidth: "0 2px 2px 0",
        borderStyle: "solid",
        borderColor: "white",
        transform: "rotate(45deg)",
        margin: "auto"
      },
      "& span": {
        display: "block",
        marginRight: 3
      }
    },
    openDropDown: {
      "&:after": {
        transform: "rotate(-145deg)"
      }
    }
  },
  menuIcon: {
    minWidth: "auto",
    paddingRight: 15
  },
  userName: {
    display: "block"
  },
  "@media (max-width:767px)": {
    profileBtn: {
      "& button": {
        padding: "0 20px 0 10px",
        fontSize: "0.87rem",
        height: 60,
        "&:after": {
          height: 8,
          width: 8,
          right: 10
        }
      }
    }
  },
  "@media (max-width:479px)": {
    profileBtn: {
      "& span": {
        display: "none",
        fontSize: "0"
      }
    },
    userName: {
      display: "block !important",
      fontSize: "0.87rem !important",
      maxWidth: "66px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden"
    }
  },
  subnav_navlink: {
    color: "black",
    "&:hover": {
      textDecoration: "none",
      color: "#252f6a"
    }
  }
}));
const StyledMenu = withStyles({
  paper: {
    borderRadius: 0,
    boxShadow: "0px 3px 4px rgba(0,0,0,0.16)",
    width: "auto",
    "& ul": {
      padding: 0,
      "& li": {
        padding: "10px 15px"
      }
    }
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left"
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function HeaderDrawer() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userData = Token.getUser();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = id => {
    Token.resetToken();
    window.location.replace("/login");
  };

  const handleRedirectPage = redirectUrl => {
    history.replace(redirectUrl);
  };

  return (
    <div className={classes.profileBtn}>
      <Button
        className={classes.afterLogin}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <FormattedMessage
          id="header_header_drawer_welcome"
          defaultMessage="Welcome,"
        />
        <span className={classes.userName}>{`${userData &&
          userData.firstName}`}</span>
      </Button>
      <StyledMenu
        className={classes.customDropdown}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => handleRedirectPage("/profile")}>
          <ListItemIcon className={classes.menuIcon}>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <NavLink className={classes.subnav_navlink} to="/profile">
            <ListItemText
              primary={
                userData && userData.loginType === "Organization" ? (
                  <FormattedMessage
                    id="header_header_drawer_admin_profile"
                    defaultMessage="Admin Profile"
                  />
                ) : (
                  <FormattedMessage
                    id="header_header_drawer_profile"
                    defaultMessage="Profile"
                  />
                )
              }
            />
          </NavLink>
        </StyledMenuItem>
        {userData && userData.loginType === "Organization" && (
          <>
            <StyledMenuItem onClick={() => handleRedirectPage("/member")}>
              <ListItemIcon className={classes.menuIcon}>
                <GroupAddIcon fontSize="small" />
              </ListItemIcon>
              <NavLink className={classes.subnav_navlink} to="/member">
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="header_header_drawer_colleagues"
                      defaultMessage="Colleagues"
                    />
                  }
                />
              </NavLink>
            </StyledMenuItem>

            <StyledMenuItem
              onClick={() => handleRedirectPage("/thought-leadership")}
            >
              <ListItemIcon className={classes.menuIcon}>
                <EditIcon fontSize="small" />
              </ListItemIcon>
              <NavLink
                className={classes.subnav_navlink}
                to="/thought-leadership"
              >
                <ListItemText
                  primary={
                    <FormattedMessage
                      id="header_header_drawer_op_ed"
                      defaultMessage="Op-Ed"
                    />
                  }
                />
              </NavLink>
            </StyledMenuItem>
          </>
        )}
        <StyledMenuItem onClick={() => handleRedirectPage("/how-to")}>
          <ListItemIcon className={classes.menuIcon}>
            <YouTubeIcon fontSize="small" />
          </ListItemIcon>
          <NavLink className={classes.subnav_navlink} to="/how-to">
            <ListItemText
              primary={
                <FormattedMessage
                  id="header_header_drawer_how_to"
                  defaultMessage="How-to"
                />
              }
            />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon className={classes.menuIcon}>
            <PowerSettingsNewIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <FormattedMessage
                id="header_header_drawer_logout"
                defaultMessage="Logout"
              />
            }
            className={classes.subnav_navlink}
            onClick={handleSubmit}
          />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
