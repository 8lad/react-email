import { Img, Section, Heading } from "@react-email/components";
import React from "react";
import { StylesType } from "../../../_helpers/types";

export const Header = () => {
  return (
    <Section style={sectionStyles}>
      <Img
        style={imageStyles}
        src="https://picsum.photos/200/200"
        alt="Random image instead of the logo"
      />
      <Heading as="h1" style={titleStyles}>
        Hi <strong>James</strong>, your Best product account has been approved!
      </Heading>
    </Section>
  );
};

const imageStyles: StylesType = {
  display: "block",
  width: "135px",
  height: "135px",
  margin: "0 auto 20px",
  borderRadius: "50%",
  objectFit: "cover",
};

const titleStyles: StylesType = {
  textAlign: "center",
  fontWeight: 400,
  margin: "0 auto",
};

const sectionStyles: StylesType = {
  maxWidth: 670,
  marginBottom: 67,
};
