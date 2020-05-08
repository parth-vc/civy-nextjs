import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import clsx from "clsx";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SiteHeading from "../../components/contentHeading";
import Newyork from "../../assests/services/newyork.jpg";
import Statueofliberty from "../../assests/services/statueofliberty.jpg";
import useWidth from "@util/useWidth";
import useGobalStyle from "@common-styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  effileTowerImage: {
    backgroundColor: "#ffffff"
  },
  commonLine: {
    marginBottom: 0
  }
}));

const allContent = [
  {
    title: (
      "WHAT MAKES CIVY DIFFERENT------------------"
      // <FormattedMessage
      //   id="services_introservice1_title"
      //   defaultMessage="WHAT MAKES CIVY DIFFERENT"
      // />
    ),
    type: "mainTitle",
    point1: (
      <FormattedMessage
        id="services_introservice1_point1"
        defaultMessage="Enables cities and governments to create their own data, aggregate data and control their own narrative."
      />
    ),
    point2: (
      <FormattedMessage
        id="services_introservice1_point2"
        defaultMessage="Increase and improve public outreach by linking with other social media channels such as Facebook, Twitter, and LinkedIn."
      />
    ),
    point3: (
      <FormattedMessage
        id="services_introservice1_point3"
        defaultMessage="Complete confidentiality of resident responses, which are only visible to city or governments subscribing to CIvy. Data is owned by cities or governments and Civy does not engage in third-party sales."
      />
    ),
    point4: (
      <FormattedMessage
        id="services_introservice1_point4"
        defaultMessage="Download and store project data on your own servers. To comply with privacy regulation, Civy removes data 3-months after the project is marked completed by the clients."
      />
    ),
    point5: (
      <FormattedMessage
        id="services_introservice1_point5"
        defaultMessage="Option to white-label Civy as your own platform with your unique branding.  "
      />
    ),
    point6: (
      <FormattedMessage
        id="services_introservice1_point6"
        defaultMessage="Civy also offers additional services such as 3D Holographic and GIS Mapping with applications in planning, designing, and marketing project and city developments."
      />
    )
  },
  {
    title: (
      <FormattedMessage
        id="services_introservice2_title"
        defaultMessage="Product Functionality for Cities & Governments."
      />
    ),
    content: "",
    type: "ServiceSection",
    point1: (
      <FormattedMessage
        id="services_introservice2_point1"
        defaultMessage="Cities and governments create an account on Civy platform and link their own social media channels."
      />
    ),
    point2: (
      <FormattedMessage
        id="services_introservice2_point2"
        defaultMessage="Add multiple users to the account with defined user roles such as Director of Public Works."
      />
    ),
    point3: (
      <FormattedMessage
        id="services_introservice2_point3"
        defaultMessage="Create projects, upload descriptions, and pictures pertaining to the vision of the project."
      />
    ),
    point4: (
      <FormattedMessage
        id="services_introservice2_point4"
        defaultMessage="Share across different channels and ask questions for residents to answer."
      />
    ),
    point5: (
      <FormattedMessage
        id="services_introservice2_point5"
        defaultMessage="Gather and analyze responses, capture more demographics in the community supported by our multiple language capabilities."
      />
    ),
    point6: (
      <FormattedMessage
        id="services_introservice2_point6"
        defaultMessage="Utilize analytics for faster decision-making, execution and outcome."
      />
    )
  }
];

export default function IntroService() {
  const classes = { ...useGobalStyle(), ...useStyles() };
  const width = useWidth();
  const option = [];
  for (let index = 0; index < allContent.length; index++) {
    if (index % 2 === 0) {
      option.push(
        <div key={index} className={classes.commonSpacing}>
          <SiteHeading
            heading={allContent[index].title}
            type={allContent[index].type}
          />
          <Grid container spacing={2} className={classes.spacingTop30}>
            <Grid item xl={8} lg={8} md={6} sm={12}>
              <div>
                <Typography variant="h3" color="primary">
                  <FormattedMessage
                    id="services_introservice1_content"
                    defaultMessage="Civy is an engagement platform for cities, governments & residents, and enables you to create, aggregate, and store your data."
                  />
                </Typography>
                <List
                  component="nav"
                  aria-label="main mailbox folders"
                  className={classes.spacingTop30}
                >
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point1} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point2} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point3} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point4} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point5} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point6} />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={6}
              container
              justify={width === "sm" || width === "xs" ? "center" : "flex-end"}
            >
              <img
                src={Newyork}
                alt=""
                className={clsx(classes.imageStyle, classes.effileTowerImage)}
              />
            </Grid>
          </Grid>
        </div>
      );
    } else {
      option.push(
        <div key={index} className={classes.commonSpacing}>
          <SiteHeading
            heading={allContent[index].title}
            content={allContent[index].content}
            type={allContent[index].type}
          />
          <Grid
            className={classes.spacingTop30}
            container
            spacing={2}
            direction={width === "sm" || width === "xs" ? "column-reverse" : ""}
          >
            <Grid
              item
              xl={4}
              lg={4}
              md={6}
              container
              justify={width === "sm" || width === "xs" ? "center" : ""}
            >
              <div>
                <img
                  src={Statueofliberty}
                  alt=""
                  className={clsx(classes.imageStyle, classes.effileTowerImage)}
                />
              </div>
            </Grid>
            <Grid item xl={8} lg={8} md={6}>
              <div>
                <Typography variant="h3" color="primary">
                  <FormattedMessage
                    id="services_introservice2_content"
                    defaultMessage="Civy provides an easy-to-use platform to foster civic
                    engagement."
                  />
                </Typography>
                <List
                  className={classes.spacingTop30}
                  component="nav"
                  aria-label="main mailbox folders"
                >
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point1} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point2} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point3} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point4} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point5} />
                  </ListItem>
                  <ListItem className={classes.listItemCommon}>
                    <ListItemText primary={allContent[index].point6} />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
  return <div>{option}</div>;
}
