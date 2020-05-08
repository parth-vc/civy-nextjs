import React from "react";
import clsx from "clsx";
import useGobalStyle from "@common-styles";
import About1 from "../../assests/about/about1.jpg";
import About2 from "../../assests/about/about2.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  MissionContent: {
    paddingRight: 35
  },
  contentHeading: {
    marginBottom: 10
  },
  missionImgOuter: {
    paddingLeft: 35,
    "& p": {
      marginTop: 15,
      "&:first-child": {
        marginTop: 0
      },
      "& strong": {
        fontWeight: 500
      }
    }
  },
  ourVission: {
    marginTop: 80
  },
  missionImg: {
    maxWidth: "100%",
    width: "100%",
    display: "block"
  },
  "@media (max-width:1024px)": {
    MissionContent: {
      paddingRight: 20
    },
    missionImgOuter: {
      paddingLeft: 20
    }
  },
  "@media (max-width:991px)": {
    MissionContent: {
      paddingRight: 15
    },
    missionImgOuter: {
      paddingLeft: 15
    }
  },
  "@media (max-width:767px)": {
    MissionContent: {
      paddingRight: 0,
      marginBottom: 15,
      textAlign: "center"
    },
    missionImgOuter: {
      paddingLeft: 0
    },
    ourVission: {
      marginTop: 30,
      textAlign: "center"
    },
    orderMob: {
      order: 2,
      marginTop: 15
    }
  }
}));

export default function Index() {
  const classes = { ...useGobalStyle(), ...useStyles() };
  const options = [];
  const allContent = [
    {
      header: (
        <FormattedMessage id="about_vision_title" defaultMessage="Our Vision" />
      ),
      content: (
        <FormattedMessage
          id="about_vision_content"
          defaultMessage="To create an engagement loop which captures cities, governments, residents, and stakeholders, and build a smarter planet."
        />
      ),
      img: About1
    },
    {
      header: (
        <FormattedMessage
          id="about_mission_title"
          defaultMessage="Our Mission"
        />
      ),
      content: (
        <FormattedMessage
          id="about_mission_content1"
          defaultMessage="Civy helps cities and governments improve public outreach and stakeholder engagement across civic projects by understanding their pain points, understanding what can be improved and help facilitate a better discussion using our proprietary platform. Our philosophy to accomplish this is a ‘back-to-basics’ approach of asking people, listening to their feedback, and help our clients (cities and governments) act on this feedback. "
        />
      ),
      img: About2
    }
  ];
  for (let i = 0; i < allContent.length; i++) {
    if (i % 2 === 0) {
      options.push(
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
            <div className={classes.MissionContent}>
              <Typography
                variant="h2"
                color="primary"
                className={classes.contentHeading}
              >
                {allContent[i].header}
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                {allContent[i].content}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
            <div className={classes.missionImgOuter}>
              <img
                src={allContent[i].img}
                alt="Logo"
                className={clsx(classes.imageStyle, classes.missionImg)}
              />
            </div>
          </Grid>
        </Grid>
      );
    } else {
      options.push(
        <Grid container spacing={0} className={classes.ourVission}>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={8}
            xl={8}
            className={classes.orderMob}
          >
            <div
              className={clsx(classes.MissionContent, classes.vissionImgOuter)}
            >
              <img
                src={allContent[i].img}
                alt="Logo"
                className={clsx(classes.imageStyle, classes.missionImg)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
            <div
              className={clsx(classes.missionImgOuter, classes.vissionContent)}
            >
              <Typography
                variant="h2"
                color="primary"
                className={classes.contentHeading}
              >
                {allContent[i].header}
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                {allContent[i].content}
              </Typography>
            </div>
          </Grid>
        </Grid>
      );
    }
  }

  return (
    <div className={clsx(classes.commonSpacing, classes.aboutMission)}>
      <Container maxWidth="lg">{options}</Container>
    </div>
  );
}
