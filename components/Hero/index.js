import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import useGobalStyle from "@common-styles";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IntroComponent from "../introComponent";
import VideoComponent from "../VideoComponent";

const useStyles = makeStyles(theme => ({
  introContent: {
    paddingRight: "10%"
  },
  contentText: {
    margin: "33px 0 43px"
  },
  "@media (max-width:1279px)": {
    introContent: {
      paddingRight: 0,
      marginBottom: 30
    }
  }
}));

const title = (
  <FormattedMessage id="landing_about_title" defaultMessage="About CIVY" />
);
const content = (
  <FormattedMessage
    id="landing_about_content"
    defaultMessage="We help cities and governments improve stakeholder engagement and public outreach across civic projects."
  />
);

const type = "mainTitle";
const mainContent = (
  <FormattedMessage
    id="landing_about_maincontent"
    defaultMessage="Civy is an easy and secure way for residents to participate and share feedback on current and upcoming public projects by cities and governments. A dedicated online platform that reaches a wider audience. Stakeholders from all demographics engage and provide feedback to their cities and government agencies, with convenience and efficiency. "
  />
);

const videoId = process.env.REACT_APP_VIDEO_ID;
function Hero() {
  const history = useHistory();
  const classes = { ...useGobalStyle(), ...useStyles() };
  const handleClick = () => {
    history.push("/about");
  };
  return (
    <div
      className={clsx(classes.commonSpacing, classes.introCivy)}
      id="back-to-top-bottom"
    >
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div className={classes.introContent}>
              <IntroComponent
                heading={title}
                content={content}
                type={type}
                mainContent={mainContent}
                handleClick={handleClick}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <VideoComponent videoId={videoId} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Hero;
