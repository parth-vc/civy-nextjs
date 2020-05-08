import React from "react";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import IntroService from "./introService";
import CaseStudy from "./caseStudy";
import IntegratedServices from "./integratedServices";
import Premium from "./premium";
// import SocialMeta from "../../SocialMeta";

export default React.memo(function Index() {
  return (
    <>
      {/* <SocialMeta
        title="Services"
        description="Services"
        url={document.URL}
        // image={"https://storage.googleapis.com/icommunis/a6bcc12d-ce40-4c18-a43b-f3d877852ec4"}
      /> */}
      <Header type="inner" />
      <Banner
        name={
          <FormattedMessage
            id="header_banner_service"
            defaultMessage="Services"
          />
        }
      />
      <Container maxWidth="lg">
        <IntroService />
        <IntegratedServices />
        <CaseStudy />
        <ContactUs />
      </Container>
      <Footer />
    </>
  );
});
