import * as React from "react";
import { ContentWrapper } from "../../_base/_ContentWrapper/ContentWrapper";
import {
  Column,
  Heading,
  Link,
  Row,
  Section,
  Text,
  Img,
} from "@react-email/components";
import { StylesType } from "../../../_helpers/types";
import {
  baseTextStyles,
  centeredBlockStyles,
} from "../../../_helpers/constants";

export const AppInfo = () => {
  const wrapperStyles: StylesType = {
    padding: "77px 10px 106px 10px",
    marginBottom: 67,
  };
  return (
    <ContentWrapper additionalStyles={wrapperStyles}>
      <Section style={sectionStyles}>
        <Heading style={titleStyles} as="h2">
          Get the Best app!
        </Heading>
        <Text style={textStyles}>
          Get the most of Best by installing our mobile app. You can log in by
          using your existing emails address an password.
        </Text>
        <Row style={rowStyles}>
          <Column>
            <Link style={leftLink} href="https://play.google.com/store/">
              <Img
                style={downloadAppLinkImage}
                src="https://tascombank.ua/google_pay/images/google-play.png"
                alt="Google play store download"
              />
            </Link>
          </Column>
          <Column>
            <Link style={rightLink} href="https://www.apple.com/app-store/">
              <Img
                style={downloadAppLinkImage}
                src="https://www.tapsmart.com/wp-content/uploads/2015/08/app-store-badge-480x148.png"
                alt="App Store download app"
              />
            </Link>
          </Column>
        </Row>
      </Section>
    </ContentWrapper>
  );
};

const sectionStyles: StylesType = {
  ...centeredBlockStyles,
  maxWidth: 669,
};

const titleStyles: StylesType = {
  ...centeredBlockStyles,
  textAlign: "center",
  marginBottom: 40,
  fontSize: 42,
  lineHeight: 1.5,
  color: "#000000",
};

const textStyles: StylesType = {
  ...centeredBlockStyles,
  ...baseTextStyles,
  marginBottom: 58,
  textAlign: "center",
};

const rowStyles: StylesType = {
  width: "100%",
};

const downloadAppLink: StylesType = {
  boxSizing: "border-box",
  overflow: "hidden",
  display: "block",
  maxWidth: 280,
  width: "100%",
  padding: "13px 23px",
  borderRadius: 80,
  backgroundColor: "#000000",
};

const leftLink: StylesType = {
  ...downloadAppLink,
  marginLeft: 0,
  marginRight: "auto",
};

const rightLink: StylesType = {
  ...downloadAppLink,
  marginLeft: "auto",
  marginRight: 0,
};

const downloadAppLinkImage: StylesType = {
  display: "block",
  objectFit: "contain",
  maxWidth: "100%",
  maxHeight: "100%",
};
