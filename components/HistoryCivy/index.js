import React from "react";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import useGobalStyle from "@common-styles";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FormattedMessage } from "react-intl";
import SiteHeading from "../contentHeading";

const useStyles = makeStyles(() => ({
  timelineWarpper: {
    overflow: "hidden",
    marginBottom: 80
  },
  timeLineContent: {
    marginTop: 125,
    position: "relative",
    "&:first-child": {
      marginTop: 0
    },
    "&:last-child": {
      "&:after": {
        content: `''`,
        position: "absolute",
        right: 0,
        background: "#ffffff",
        width: "100%",
        height: "100%",
        zIndex: -1,
        bottom: 0
      }
    },
    "& > div": {
      width: "50%"
    }
  },
  timeLineRight: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  fontHeading: {
    position: "relative",
    "&:before": {
      content: `''`,
      position: "absolute",
      width: 2,
      height: 150,
      top: "100%",
      left: 0,
      right: 0,
      margin: "0 auto",
      background: "#252f6a",
      zIndex: -1
    }
  },
  spanStyle: {
    fontSize: "9.37rem",
    fontWeight: 700,
    lineHeight: "150px"
  },
  leftHeading: {
    marginBottom: 20
  },
  sinceLabel: {
    letterSpacing: 10,
    textTransform: "upperCase",
    marginLeft: "-30%"
  },
  "@media (max-width:1024px)": {
    spanStyle: {
      fontSize: "7rem",
      lineHeight: "100px"
    },
    timeLineContent: {
      marginTop: 70
    }
  },
  "@media (max-width:767px)": {
    spanStyle: {
      fontSize: "5rem",
      lineHeight: "80px"
    },
    timeLineContent: {
      flexDirection: "column",
      textAlign: "center",
      marginTop: 50,
      "& > div": {
        width: "100%"
      },
      "&:last-child": {
        "&:after": {
          display: "none"
        }
      }
    },
    timelineWarpper: {
      marginBottom: 30
    },
    timeLineRight: {
      order: -1
    },
    fontHeading: {
      paddingBottom: 70,
      "&:before": {
        top: "inherit",
        bottom: 10,
        height: 50
      }
    }
  }
}));

const allContent = [
  {
    header: (
      <FormattedMessage id="about_history1_title" defaultMessage="Ideation" />
    ),
    content: (
      <FormattedMessage
        id="about_history1_content"
        defaultMessage="After executing multiple projects focused on infrastructure, energy and technology across the globe we realized that governments, cities officials and communities, despite their best intentions, always complained of lack of consultation; whereas private interests such as developers worry that their commercial objectives will be negatively impacted if they engage with communities too much. Communities on the other hand felt that they were provided sugar-coated business plans and project investment proposals, but they are not consulted in the design phase or often treated as non-experts who do not know what they are talking about. It is a common occurrence for residents to feel unheard during civic development projects in their communities. "
      />
    ),
    year: "2016"
  },
  {
    header: (
      <FormattedMessage id="about_history2_title" defaultMessage="Initiation" />
    ),
    content: (
      <FormattedMessage
        id="about_history2_content"
        defaultMessage="To resolve this, we visualized a common platform where project ideas are sourced from city and government officials, and directly presented to residents and stakeholders for feedback. The former can then engage, analyze and narrow down the best course of action based on feedback from stakeholders (residents). The government and city authorities could explain directly to the people what amongst those can be accomplished and what cannot, listing the potentials as well as the complications that might be faced in the short term, elaborate the financials involved in the development and upon proper consultation from all collaborators act and implement the projects swiftly."
      />
    ),
    year: "2017"
  },
  {
    header: (
      <FormattedMessage
        id="about_history3_title"
        defaultMessage="Formulation"
      />
    ),
    content: (
      <FormattedMessage
        id="about_history3_content"
        defaultMessage="With clear purpose & resolve, we created the concept platform focusing on addressing the pain-points during our discovery phase with cities and governments (mayors, councilpersons, legislative assemblypersons, city managers, department directors, marketing teams, technology teams and community groups). The concept platform combining information analytics tool with social media aspects to provide widespread outreach and engage with the residents for all civic project developments, has obtained client validation. The key goals were to reduce the time, cost and resources that are at disposal for a civic project and increase public outreach and increased inclusivity for all stakeholders whilst maintaining data privacy and security. "
      />
    ),
    year: "2018"
  },
  {
    header: (
      <FormattedMessage
        id="about_history4_title"
        defaultMessage="Implementation"
      />
    ),
    content: (
      <FormattedMessage
        id="about_history4_content"
        defaultMessage="Starting in 2019, we implemented Civy, a platform to help cities and governments improve public outreach across civic projects. The platform solicits feedback by engaging residents from millennials to seniors of all demographics, meanwhile reducing the need for using outdated & legacy methods such as old-fashioned townhalls. The platform provides unprecedented convenience to learn, engage and provide honest feedback to stakeholders for all civic projects. The platform’s embedded one-click share across multiple social media channels, cybersecurity, and cloud hosting solutions also provide data privacy, back-office productivity gains and enables cities and governments to focus on strategic thinking."
      />
    ),
    year: "2019 "
  }
];

export default function Index() {
  const classes = { ...useGobalStyle(), ...useStyles() };
  const options = [];
  const title = (
    <FormattedMessage
      id="about_history_title"
      defaultMessage="History of civy"
    />
  );
  const type = "mainTitle";

  for (let i = 0; i < allContent.length; i++) {
    var first = allContent[i].year.substring(0, 2);
    var second = allContent[i].year.substring(2, 4);
    if (i % 2 === 0) {
      options.push(
        <Box
          display="flex"
          alignItems="center"
          className={classes.timeLineContent}
        >
          <div className={classes.timeLineLeft} key={i}>
            <Typography
              variant="h2"
              color="primary"
              className={classes.leftHeading}
            >
              {allContent[i].header}
            </Typography>
            <Typography variant="subtitle1">{allContent[i].content}</Typography>
          </div>
          <div className={classes.timeLineRight}>
            {i === 0 && (
              <Typography variant="h5" className={classes.sinceLabel}>
                <FormattedMessage
                  id="about_history_since"
                  defaultMessage="since "
                />
              </Typography>
            )}
            <Typography
              variant="subtitle2"
              component="h2"
              className={classes.fontHeading}
              color="primary"
            >
              <Typography
                variant="body1"
                component="span"
                className={classes.spanStyle}
                color="primary"
              >
                {first}
              </Typography>
              {second}
            </Typography>
          </div>
        </Box>
      );
    } else {
      options.push(
        <Box
          display="flex"
          alignItems="center"
          className={classes.timeLineContent}
        >
          <div className={classes.timeLineLeft} key={i}>
            <Typography
              variant="h2"
              color="primary"
              className={classes.leftHeading}
            >
              {allContent[i].header}
            </Typography>
            <Typography variant="subtitle1">{allContent[i].content}</Typography>
          </div>
          <div className={classes.timeLineRight}>
            <Typography
              variant="subtitle2"
              component="h2"
              className={classes.fontHeading}
              color="primary"
            >
              <Typography
                variant="body1"
                component="span"
                color="secondary"
                className={classes.spanStyle}
              >
                {first}
              </Typography>
              {second}
            </Typography>
          </div>
        </Box>
      );
    }
  }

  return (
    <div className={clsx(classes.commonSpacing, classes.aboutTimeLine)}>
      <Container maxWidth="lg">
        <SiteHeading heading={title} type={type} />
        <div className={classes.timelineWarpper}>{options}</div>
      </Container>
    </div>
  );
}
