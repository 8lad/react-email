import { Container, Html, Body } from "@react-email/components";
import * as React from "react";
import { EmailHead } from "./_components/_base/_EmailHead/EmailHead";
import { Header } from "./_components/_shared/_Header/Header";
import { StylesType } from "./_helpers/types";
import { MainInfo } from "./_components/_shared/_MainInfo/MainInfo";
import { AppInfo } from "./_components/_shared/_AppInfo/AppInfo";

export default function Email() {
  return (
    <Html lang="en" dir="ltr">
      <EmailHead />
      <Body style={bodyStyles}>
        <Container style={containerStyles}>
          <Header />
          <MainInfo />
          <AppInfo />
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyles: StylesType = {
  width: "100%",
  backgroundColor: "#E5E5E5",
  paddingTop: "146px",
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
