import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import useGobalStyle from "@common-styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { FormattedMessage } from "react-intl";
import VidoContent from "../VideoComponent";
import IntroComponent from "../../components/introComponent";

const useStyles = makeStyles(theme => ({
  introContent: {
    paddingRight: "10%"
  },
  contentIntro: {
    margin: "33px 0 43px"
  },
  "@media (max-width:767px)": {
    introContent: {
      paddingRight: 0
    }
  }
}));
const heading = (
  <FormattedMessage id="about_interview_title" defaultMessage="interview" />
);
const content = (
  <FormattedMessage
    id="about_interview_content"
    defaultMessage="Amar Flora, Founder of Civy was interviewed on live TV to discuss Civy and its goal of helping cities and governments"
  />
);
const type = "ServiceSection";
const mainContent = (
  <FormattedMessage
    id="about_interview_maincontent"
    defaultMessage="Watch Civy founder Amar Flora explain on live television how Civy enables decision-makers to use the data from users to make faster decisions, act on intel, and simply connect in ‘blue-sky’ thinking with their residents; all in real-time, unfiltered and on an independent and secure platform."
  />
);
const button = false;
const videoId = process.env.REACT_APP_VIDEO_ID;
function Index() {
  const classes = { ...useGobalStyle(), ...useStyles() };
  return (
    <div className={clsx(classes.commonSpacing, classes.introCivy)}>
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div className={classes.introContent}>
              <IntroComponent
                heading={heading}
                content={content}
                type={type}
                mainContent={mainContent}
                button={button}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <VidoContent videoId={videoId} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Index;
