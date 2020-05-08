import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SiteHeading from "../contentHeading";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  homeServices: {
    padding: "80px 0 50px"
  },
  servcieInfo: {
    margin: "33px 0 43px"
  },
  servicesRight: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 30
  },
  contentBox: {
    width: "50%",
    padding: 25
  },
  "@media (max-width:767px)": {
    servcieInfo: {
      margin: "15px 0 30px"
    }
  }
}));

export default function IntroComponent(props) {
  const classes = useStyles();
  return (
    <>
      <SiteHeading
        heading={props.heading}
        content={props.content}
        type={props.type}
      />
      <Typography variant="subtitle1" className={classes.servcieInfo}>
        {props.mainContent}
      </Typography>
      {props.button === false ? (
        ""
      ) : (
        <Button
          className={classes.siteButton}
          variant="outlined"
          color="primary"
          onClick={props.handleClick}
        >
          <FormattedMessage id="landing_readmore" defaultMessage="Read more " />
        </Button>
      )}
    </>
  );
}
