import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useGobalStyle from "@common-styles";
import infographicImg from "../../assests/services/civy-infographic.png";
import infographicImgMobile from "../../assests/services/civy-infographic-mobile.png";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  titleSpacing: {
    marginBottom: 40
  }
}));
export default function IntegratedServices() {
  const classes = { ...useGobalStyle(), ...useStyles() };
  return (
    <div className={classes.commonSpacing}>
      <Box textAlign="center" className={classes.titleSpacing}>
        <Typography variant="h3" color="primary">
          <FormattedMessage
            id="services_integratedservices_title"
            defaultMessage="Integrated Services:"
          />
        </Typography>
      </Box>
      <Box display={{ xs: "none", sm: "block" }}>
        <img
          src={infographicImg}
          alt="civy"
          style={{ display: "block", margin: "0 auto" }}
        />
      </Box>
      <Box display={{ xs: "block", sm: "none" }}>
        <img
          src={infographicImgMobile}
          alt="civy"
          style={{ display: "block", margin: "0 auto" }}
        />
      </Box>
    </div>
  );
}
