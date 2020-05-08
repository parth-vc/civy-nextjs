import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import useGobalStyle from "@common-styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import Grid from "@material-ui/core/Grid";
import SiteHeading from "../contentHeading";
import amar from "../../assests/common/amar.png";
import sabrina from "../../assests/common/sabrina.png";
import jinhong from "../../assests/common/jinhong.png";
import suketu from "../../assests/common/suketu.png";
import infoxzon from "../../assests/common/infoxzon.png";
import twisha from "../../assests/common/twisha.png";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { ReactComponent as LinkedI } from "../../assests/common/social/colorSocial/linkedin.svg";
import { ReactComponent as Twitter } from "../../assests/common/social/colorSocial/twitter.svg";

const useStyles = makeStyles(theme => ({
  introContent: {
    paddingRight: "10%"
  },
  contentIntro: {
    margin: "33px 0 43px"
  },
  teamName: {
    fontSize: "1.9rem",
    lineHeight: "4rem",
    fontWeight: 800
  },
  teamPost: {
    fontSize: "1.8rem",
    lineHeight: "3rem"
  },
  teamDes: {
    margin: "5px 0 15px"
  },
  teamWarpper: {
    textAlign: "center"
  },
  teamInfo: {
    "& a": {
      margin: "0 5px"
    }
  },
  teamBottom: {
    background: "#eff0f4"
  },
  teamBottomWarpper: {
    padding: "50px 0"
  },
  teamBottomh3: {
    lineHeight: "60px"
  },
  teamImg: {
    WebkitFilter: "drop-shadow(0px 26px 19px rgba(0,0,0,0.16))",
    filter: "drop-shadow(0px 26px 19px rgba(0,0,0,0.16))"
  },
  teamBottomBox: {
    "& p": {
      marginTop: 10
    }
  },
  "@media (max-width:991px)": {
    teamBottomh3: {
      lineHeight: "40px"
    },
    teamBottomBox: {
      marginTop: 50,
      textAlign: "center",
      padding: "0 50px",
      "&:first-child": {
        marginTop: 0
      }
    },
    teamInfo: {
      "& img": {
        maxWidth: "75%",
        display: "block",
        margin: "0 auto"
      }
    },
    teamName: {
      fontSize: "2.5rem",
      lineHeight: "3.5rem",
      marginTop: 10
    },
    teamPost: {
      fontSize: "1.8rem",
      lineHeight: "2rem"
    }
  },
  "@media (max-width:767px)": {
    introContent: {
      paddingRight: 0
    },
    teamName: {
      fontSize: "2rem",
      lineHeight: "3.5rem"
    },
    teamPost: {
      fontSize: "1.5rem",
      lineHeight: "2rem"
    },
    teamBottomh3: {
      lineHeight: "36px"
    },
    teamBottomBox: {
      marginTop: 30,
      padding: 0,
      "&:first-child": {
        marginTop: 0
      }
    }
  },
  "@media (max-width:600px)": {
    teamInfo: {
      "& img": {
        maxWidth: "100%"
      }
    },
    teamInfoLast: {
      marginTop: 30
    }
  }
}));
const heading = (
  <FormattedMessage id="about_ourteam_title" defaultMessage="OUR TEAM" />
);
const content = (
  <FormattedMessage
    id="about_ourteam_content"
    defaultMessage="We are a group of people passionate about GovTech, Smart Cities and stakeholder engagement."
  />
);
const type = "commonTitle";

function Index() {
  const classes = { ...useGobalStyle(), ...useStyles() };
  return (
    <div className={clsx(classes.commonSpacing, classes.introCivy)}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center">
          <SiteHeading heading={heading} content={content} type={type} />
        </Box>
        <Grid
          container
          spacing={3}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          className={clsx(classes.spacingTop50, classes.teamWarpper)}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className={classes.teamInfo}>
              <img src={amar} alt="amar" className={classes.teamImg} />
              <Typography
                variant="h3"
                color="primary"
                className={classes.teamName}
              >
                <FormattedMessage
                  id="about_ourteam_person1_name"
                  defaultMessage="Amar Flora (MBA, GAICD, GCCM, CPA)"
                />
              </Typography>
              <Typography variant="h5" className={classes.teamPost}>
                <FormattedMessage
                  id="about_ourteam_person1_title"
                  defaultMessage="Co-Founder and CEO"
                />
              </Typography>
              <Typography variant="subtitle1" className={classes.teamDes}>
                <FormattedMessage
                  id="about_ourteam_person1_content"
                  defaultMessage="A visionary leader and an entrepreneur with a passion for higher 
                  education, smart cities, and government operations. Amar has
                  co-founded two privately-owned startups, building global teams
                  and collaborators, served on boards, and led the establishment
                  and operations of a University startup seeded with private
                  funding of $20M. Amar has sold services and consulted with
                  clients across various industries, delivering meaningful impact
                  and value creation. Amar possesses a keen ability to identify
                  strategic & operational opportunities, and drive innovation.
                  Amar holds an MBA, post-graduates in Change Management and
                  Corporate Governance, and CPA certification from top
                  institutions in the US and Australia."
                />
              </Typography>
              <Link href="https://twitter.com/civyengage">
                <Twitter />
              </Link>
              <Link href="https://www.linkedin.com/company/civyengage">
                <LinkedI />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className={clsx(classes.teamInfo, classes.teamInfoLast)}>
              <img src={sabrina} alt="sabrina" className={classes.teamImg} />
              <Typography
                variant="h3"
                color="primary"
                className={classes.teamName}
              >
                <FormattedMessage
                  id="about_ourteam_person2_name"
                  defaultMessage="Sabrina Uppal (MS, PMP)"
                />
              </Typography>
              <Typography variant="h5" className={classes.teamPost}>
                <FormattedMessage
                  id="about_ourteam_person2_title"
                  defaultMessage="Co-Founder and COO"
                />
              </Typography>
              <Typography variant="subtitle1" className={classes.teamDes}>
                <FormattedMessage
                  id="about_ourteam_person2_content"
                  defaultMessage="Sabrina joins Civy with quality experiences, and successfully
                  executing multiple startup and research projects across private
                  and government sectors. Her creative flair coupled with
                  innovative mindset, enables her to design and deliver value for
                  customers. Additionally, Sabrina possesses extensive experience
                  in managing government contracts for organizations contracted by
                  US Department of Defense. Sabrina has firsthand experience of
                  trying to engage her city or a government agency to achieve an
                  outcome. These experiences drive her passion and creativity to
                  help cities and governments foster high-impact engagement with
                  residents. Sabrina holds Bachelor of Science, Neuroscience from
                  U.C. Davis; Master of Science, Biology from Cal State Northridge
                  and is PMP Certified."
                />
              </Typography>
              <Link href="https://twitter.com/civyengage">
                <Twitter />
              </Link>
              <Link href="https://www.linkedin.com/company/civyengage">
                <LinkedI />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className={classes.teamInfo}>
              <img src={jinhong} alt="jinhong" className={classes.teamImg} />
              <Typography
                variant="h3"
                color="primary"
                className={classes.teamName}
              >
                <FormattedMessage
                  id="about_ourteam_person3_name"
                  defaultMessage="Jinhong Zhang (CPA, MBA, CGMA)"
                />
              </Typography>
              <Typography variant="h5" className={classes.teamPost}>
                <FormattedMessage
                  id="about_ourteam_person3_title"
                  defaultMessage="CFO"
                />
              </Typography>
              <Typography variant="subtitle1" className={classes.teamDes}>
                <FormattedMessage
                  id="about_ourteam_person3_content"
                  defaultMessage="Jinhong Zhang has over 20 years of experience in business and
                  financial planning and management, serving leadership roles as
                  president CFO, Finance Director, and consultant in large to
                  entrepreneurial organizations. Jinhong started his career with a
                  Fortune Global 500 company, where he managed projects financed
                  by World Bank and Asia Development each and oversaw auditing and
                  tax engagement with PWC and KPMG at the client-side."
                />
              </Typography>
              <Link href="https://twitter.com/civyengage">
                <Twitter />
              </Link>
              <Link href="https://www.linkedin.com/company/civyengage">
                <LinkedI />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div className={classes.teamInfo}>
              <img src={suketu} alt="suketu" className={classes.teamImg} />
              <Typography
                variant="h3"
                color="primary"
                className={classes.teamName}
              >
                <FormattedMessage
                  id="about_ourteam_person4_name"
                  defaultMessage="Suketu Modi (B.SC, PMP, ITIL, ISO 27001)"
                />
              </Typography>
              <Typography variant="h5" className={classes.teamPost}>
                <FormattedMessage
                  id="about_ourteam_person4_title"
                  defaultMessage="CTO"
                />
              </Typography>
              <Typography variant="subtitle1" className={classes.teamDes}>
                <FormattedMessage
                  id="about_ourteam_person4_content"
                  defaultMessage="Recognized among 100 Great People Managers of India 2019 by
                  Forbes India, and awarded Best Infrastructure Designing and
                  Smart e-Governance for Cities, Suketu is a seasoned business
                  leader & technocrat with a vast experience in ICT consulting for
                  top multinational consulting firms, governments, and PSUs who
                  serves as the CTO for Civy. Suketu holds 19+ years of ICT
                  consulting and Implementation experience of ICT Infrastructure
                  Networks Infrastructure and Smart Services designing for large
                  scale City/Campus and Smart Building Services. Suketu has worked
                  with clients and customers across the US, Middle East,
                  Singapore, and India."
                />
              </Typography>
              <Link href="https://twitter.com/civyengage">
                <Twitter />
              </Link>
              <Link href="https://www.linkedin.com/company/civyengage">
                <LinkedI />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={clsx(classes.teamBottom, classes.spacingTop50)}>
        <Container>
          <Grid
            container
            spacing={3}
            display="flex"
            alignItems="center"
            className={classes.teamBottomWarpper}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classes.teamBottomBox}
            >
              <Typography
                variant="h3"
                color="primary"
                className={classes.teamBottomh3}
              >
                <FormattedMessage
                  id="about_ourteam_description1"
                  defaultMessage="We are passionate about helping cities and governments foster
                  innovation for betterment of residents."
                />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classes.teamBottomBox}
            >
              <img src={infoxzon} alt="infoxzon" />
              <Typography variant="subtitle1">
                <FormattedMessage
                  id="about_ourteam_description2"
                  defaultMessage="An exclusive partner to Civy, Infixzon is a Consulting, Cloud
                  and Cyber Security services company led by industry veterans
                  with multiple decades of experience. Infixzon serves across USA,
                  APAC, and Mid-East regions, designing solutions for verticals
                  like Public Sector, Healthcare, Financial Services,
                  Pharmaceuticals and Manufacturing."
                />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              className={classes.teamBottomBox}
            >
              <img src={twisha} alt="twisha" />
              <Typography variant="subtitle1">
                <FormattedMessage
                  id="about_ourteam_description3"
                  defaultMessage="Twish Technologies is a team of professionals with years of
                  leadership in infrastructure policies, project feasibility
                  studies, integration & implementation strategy for city-level
                  infrastructures, smart communities, and smart cities. Their team
                  includes an Organizational Psychologist focusing on community
                  engagement on behalf of cities and governments."
                />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
export default Index;
