import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import useGobalStyle from "@common-styles";

const useStyles = makeStyles(theme => ({
  addressInfo: {
    fontStyle: "normal"
  },
  addressHeading: {
    letterSpacing: 10,
    marginBottom: 30,
    textTransform: "uppercase",
    whiteSpace: "nowrap"
  },
  addLinks: {
    letterSpacing: 2,
    fontWeight: 500,
    fontSize: "1.125rem",
    marginBottom: 15,
    display: "inline-block",
    "&:hover": {
      textDecoration: "none"
    }
  },  
  addressText: {
    marginBottom: 0,
    display: "block", 
  },
  telephoneInfo: {
    marginTop: 15,
  },
  "@media (max-width:767px)": {
    addressInfo: {
      textAlign: "center"
    },
    addressHeading: {
      marginBottom: 15
    }
  }
}));

function Adress() {
  const classes = { ...useGobalStyle(), ...useStyles() };
  return (
    <address className={classes.addressInfo}>
      <Typography variant="h5" className={classes.addressHeading}>
        <FormattedMessage
          id="landing_contactus_address_title"
          defaultMessage="Address"
        />
      </Typography>
      <Typography color="primary" className={clsx(classes.addLinks, classes.addresslbl)}>
        <FormattedMessage
          id="landing_contactus_address"
          defaultMessage="Civy Inc."
        />
      </Typography>
      <Typography className={clsx(classes.addLinks, classes.addressText)}>
        <FormattedMessage
          id="contactus_address_street"
          defaultMessage="1133 Camelback Street, "
        />
      </Typography>
      <Typography className={clsx(classes.addLinks, classes.addressText)}>
        <FormattedMessage
          id="contactus_address_code"
          defaultMessage="Newport Beach, CA, 92658-9998"
        />
      </Typography>
      <Typography className={clsx(classes.addLinks, classes.addressText)}>
        <FormattedMessage
          id="contactus_address_use"
          defaultMessage="USA"
        />
      </Typography>
      <Typography variant="body1" component="span" className={clsx(classes.addLinks, classes.telephoneInfo)}>
        <FormattedMessage
          id="landing_contactus_address_tel"
          defaultMessage="Tel:"
        />{" "}
      </Typography>
      <Link
        href="tel:+1 949 524 2292"
        className={clsx(
          classes.addLinks,
          classes.borderBottom,
          classes.borderBottomBlue
        )}
      >
        {" "}
        +1 949 524 2292
      </Link>
      <br />
      <Link
        href="mailto:info@civy.co"
        className={clsx(
          classes.addLinks,
          classes.borderBottom,
          classes.borderBottomBlue
        )}
      >
        info@civy.co
      </Link>      
    </address>
  );
}

export default Adress;
