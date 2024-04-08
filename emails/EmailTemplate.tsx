import { Container, Html, Body } from "@react-email/components";
import * as React from "react";
import { EmailHead } from "./_components/_base/_EmailHead/EmailHead";
import { Header } from "./_components/_shared/_Header/Header";
import { StylesType } from "./_helpers/types";

export default function Email() {
  return (
    <Html lang="en" dir="ltr">
      <EmailHead />
      <Body style={bodyStyles}>
        <Container style={containerStyles}>
          <Header />
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyles: StylesType = {
  width: "100%",
  backgroundColor: "#E5E5E5",
  paddingTop: "146px",
};

const containerStyles: StylesType = {
  maxWidth: "1120px",
  width: "100%",
  margin: "0 auto",
  padding: "0 10px",
};
