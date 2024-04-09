import { Column, Link, Row, Section, Text, Img } from "@react-email/components";
import React from "react";
import {
  SOCIAL_MEDIA_LINKS,
  baseTextStyles,
  centeredBlockStyles,
} from "../../../_helpers/constants";
import { StylesType } from "../../../_helpers/types";

export const Footer = () => {
  return (
    <Section style={sectionStyles}>
      <Row>
        {SOCIAL_MEDIA_LINKS.map((socialMedia) => (
          <Column key={socialMedia.linkUrl}>
            <Link style={linkStyles} href={socialMedia.linkUrl}>
              <Img
                style={linkImageStyles}
                src={socialMedia.imageUrl}
                alt={socialMedia.alt}
              />
            </Link>
          </Column>
        ))}
      </Row>
      <Text style={copyStiles}>Copyright © 2022</Text>
      <Text style={appTitleStyles}>The Best app</Text>
      <Text style={tagLineStyles}>Use and enjoy your Best app</Text>
    </Section>
  );
};

const sectionStyles: StylesType = {
  ...centeredBlockStyles,
  maxWidth: 220,
  textAlign: "center",
};

const linkImageStyles: StylesType = {
  width: 34,
  height: 34,
  display: "block",
};

const linkStyles: StylesType = {
  ...centeredBlockStyles,
  width: "100%",
};

const copyStiles: StylesType = {
  ...baseTextStyles,
  color: "#000000",
};

const appTitleStyles: StylesType = {
  ...baseTextStyles,
  color: "#000000",
  fontWeight: 700,
};

const tagLineStyles: StylesType = {
  ...baseTextStyles,
  color: "#000000",
};
