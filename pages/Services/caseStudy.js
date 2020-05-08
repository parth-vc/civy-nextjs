import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SiteHeading from "../../components/contentHeading";
import Govts from "../../assests/services/service-b.svg";
import Resident from "../../assests/services/service-d.svg";
import { makeStyles } from "@material-ui/core/styles";
import useGobalStyle from "@common-styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  caseStudyImage: {
    marginBottom: 20
  },
  caseStudyTitle: {
    marginBottom: 30
  },
  subTitle: {
    width: "100%",
    maxWidth: "410px",
    marginBottom: 30
  }
}));
const allContent = [
  {
    images: Govts,
    title: (
      <FormattedMessage
        id="services_casestudy1_title"
        defaultMessage="CITIES & GOVERNMENTS"
      />
    ),
    content1: (
      <FormattedMessage
        id="services_casestudy1_content"
        defaultMessage="An easy to use secure platform to engage the residents and accelerate smarter development for civic projects."
      />
    )
  },
  {
    images: Resident,
    title: (
      <FormattedMessage
        id="services_casestudy2_title"
        defaultMessage="RESIDENTS"
      />
    ),
    content1: (
      <FormattedMessage
        id="services_casestudy2_content"
        defaultMessage="A mobile platform to receive notifications and share feedback with your cities to guide the design and development of civic projects."
      />
    )
  }
];

export default function CaseStudy() {
  const classes = { ...useGobalStyle(), ...useStyles() };
  const heading = (
    <FormattedMessage
      id="services_casestudy_title"
      defaultMessage="CASE STUDY"
    />
  );
  const content = (
    <FormattedMessage
      id="services_casestudy_content"
      defaultMessage="How Cities & Governments connect with Residencts via Civy"
    />
  );
  const type = "commonTitle";
  return (
    <div className={classes.commonSpacing}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <SiteHeading heading={heading} content={content} type={type} />
      </Box>
      <Grid container spacing={2} className={classes.spacingTop50}>
        {allContent.map((CaseStudy, index) => (
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            key={index}
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <img
              src={CaseStudy.images}
              alt="GOVTS"
              className={classes.caseStudyImage}
            />
            <Typography variant="subtitle1" color="primary">
              <Box
                variant="subtitle1"
                fontWeight={700}
                fontSize={25}
                className={classes.caseStudyTitle}
              >
                {CaseStudy.title}
              </Box>
            </Typography>
            <Typography variant="subtitle1">
              <Box textAlign="center" className={classes.subTitle}>
                {CaseStudy.content1}
              </Box>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
