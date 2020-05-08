import React from "react";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import useGobalStyle from "@common-styles";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Controlling from "../../assests/advantages/benefit-a.svg";
import DataPolitics from "../../assests/advantages/benefit-b.svg";
import DataSecure from "../../assests/advantages/benefit-c.svg";
import Home from "../../assests/advantages/benefit-d.svg";
import Grid from "@material-ui/core/Grid";
import ContantHeading from "../contentHeading";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  advItem: {
    boxShadow: "0px 1px 4px rgba(0,0,0,0.16)",
    padding: "50px 15px",
    background: "#ffffff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative",
    zIndex: -1,
    overflow: "hidden"
  },
  numText: {
    position: "absolute",
    bottom: -52,
    left: -15,
    zIndex: -1
  },
  boxHeading: {
    fontWeight: 700,
    textTransform: "uppercase",
    margin: "15px 0 30px",
    fontSize: "1.3rem"
  },
  "@media (max-width:1024px)": {
    advItem: {
      padding: "30px 20px"
    }
  },
  "@media (max-width:767px)": {
    advItem: {
      padding: "20px 15px"
    },
    boxHeading: {
      margin: "10px 0 20px"
    },
    numText: {
      bottom: -30
    }
  }
}));

const benifitContent = [
  {
    header: (
      <FormattedMessage
        id="landing_benefit1_title"
        defaultMessage="Mobile Platform"
      />
    ),
    content: (
      <FormattedMessage
        id="landing_benefit1_content"
        defaultMessage="Civy is a convenient mobile platform easily accessible from anywhere."
      />
    ),
    no: "01",
    serviceImg: Controlling
  },
  {
    header: (
      <FormattedMessage
        id="landing_benefit2_title"
        defaultMessage="Free For Residents"
      />
    ),
    content: (
      <FormattedMessage
        id="landing_benefit2_content"
        defaultMessage="Civy is free for residents to register, answer questions and surveys, and help cities and governments improve their projects planning and delivery."
      />
    ),
    no: "02",
    serviceImg: DataPolitics
  },
  {
    header: (
      <FormattedMessage
        id="landing_benefit3_title"
        defaultMessage="Social Media Linkages"
      />
    ),
    content: (
      <FormattedMessage
        id="landing_benefit3_content"
        defaultMessage="Civy links with social media platforms to increase participation rates and demographic depth."
      />
    ),
    no: "03",
    serviceImg: DataSecure
  },
  {
    header: (
      <FormattedMessage
        id="landing_benefit4_title"
        defaultMessage="Safe & Secure"
      />
    ),
    content: (
      <FormattedMessage
        id="landing_benefit4_content"
        defaultMessage="Resident responses are confidential and Civy does not share resident data with 3rd parties."
      />
    ),
    no: "04",
    serviceImg: Home
  }
];
const header = (
  <FormattedMessage id="landing_benefit_title" defaultMessage="BENEFITS" />
);
const content = (
  <FormattedMessage
    id="landing_benefit_content"
    defaultMessage="Civy provides multiple features to leverage widespread public engagement and participation that contribute to improved governance and development outcomes. "
  />
);
const type = "commonTitle";

export default function SimplePaper() {
  const classes = { ...useGobalStyle(), ...useStyles() };

  const advantages = [];
  for (let i = 0; i < benifitContent.length; i++) {
    advantages.push(
      <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={i}>
        <div className={clsx(classes.imageStyle, classes.advItem)}>
          <img src={benifitContent[i].serviceImg} alt="civy" />
          <Typography
            variant="h5"
            className={classes.boxHeading}
            color="primary"
          >
            {benifitContent[i].header}
          </Typography>
          <Typography variant="subtitle1">
            {benifitContent[i].content}
          </Typography>
          <Typography
            variant="subtitle2"
            component="h2"
            className={classes.numText}
            color="secondary"
          >
            {benifitContent[i].no}
          </Typography>
        </div>
      </Grid>
    );
  }

  return (
    <div className={clsx(classes.commonSpacing, classes.advantageWarpper)}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center">
          <ContantHeading heading={header} content={content} type={type} />
        </Box>
        <Grid
          container
          spacing={3}
          className={clsx(classes.spacingTop50, classes.itemWarpper)}
        >
          {advantages}
        </Grid>
      </Container>
    </div>
  );
}
