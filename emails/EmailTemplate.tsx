import { Container, Html, Body, Preview } from "@react-email/components";
import * as React from "react";
import { EmailHead } from "./_components/_base/_EmailHead/EmailHead";
import { Header } from "./_components/_shared/_Header/Header";
import { StylesType } from "./_helpers/types";
import { MainInfo } from "./_components/_shared/_MainInfo/MainInfo";
import { AppInfo } from "./_components/_shared/_AppInfo/AppInfo";
import { Footer } from "./_components/_shared/_Footer/Footer";

export const EmailTemplate = () => {
  return (
    <Html lang="en" dir="ltr">
      <EmailHead />
      <Preview>This is the Best app for you 😉</Preview>
      <Body style={bodyStyles}>
        <Container style={containerStyles}>
          <Header />
          <MainInfo />
          <AppInfo />
          <Footer />
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const bodyStyles: StylesType = {
  width: "100%",
  backgroundColor: "#E5E5E5",
  paddingTop: "145px",
  paddingBottom: "145px",
  overflowX: "hidden",
  margin: 0,
};

const containerStyles: StylesType = {
  maxWidth: "1120px",
  overflow: "hidden",
  width: "100%",
  margin: "0 auto",
  padding: "0 10px",
};
