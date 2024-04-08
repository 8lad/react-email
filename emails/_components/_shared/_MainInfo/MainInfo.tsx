import React from "react";
import { ContentWrapper } from "../../_base/_ContentWrapper/ContentWrapper";
import { StylesType } from "../../../_helpers/types";
import { Hr, Img, Link, Text } from "@react-email/components";
import {
  baseTextStyles,
  centeredBlockStyles,
} from "../../../_helpers/constants";

export const MainInfo = () => {
  const wrapperStyles: StylesType = {
    padding: "62px 10px 80px 10px",
    marginBottom: 67,
  };

  return (
    <ContentWrapper additionalStyles={wrapperStyles}>
      <Img
        style={imageStyles}
        src="https://picsum.photos/200/200"
        alt="Random image instead of the logo"
      />
      <Text style={firstPharagraphStyles}>
        Your Best account has been approved and you can now log in on to your
        Best account.
      </Text>
      <Hr style={lineStyles} />
      <Text style={secondPharagraphStyles}>
        You can now access Best online or on any device by going to{" "}
        <Link
          style={productLinkStyles}
          href="https://google.com"
          target="_blank"
        >
          google.com
        </Link>
      </Text>
      <Link style={actionLinkStyles} href="https://youtube.com">
        Get started
      </Link>
    </ContentWrapper>
  );
};

const imageStyles: StylesType = {
  display: "block",
  margin: "0 auto 90px",
  width: 191,
  height: 191,
  borderRadius: "50%",
  objectFit: "cover",
};

const firstPharagraphStyles: StylesType = {
  ...centeredBlockStyles,
  ...baseTextStyles,
  marginBottom: 25,
  maxWidth: 579,
  textAlign: "center",
};

const secondPharagraphStyles: StylesType = {
  ...centeredBlockStyles,
  ...baseTextStyles,
  maxWidth: 579,
  marginBottom: 58,
  textAlign: "center",
};

const lineStyles: StylesType = {
  display: "block",
  backgroundColor: "#E5E5E5",
  maxWidth: 485,
  margin: "0 auto 25px",
};

const productLinkStyles: StylesType = {
  ...baseTextStyles,
  ...centeredBlockStyles,
  display: "inline-block",
  textAlign: "center",
  color: "#2375E2",
};

const actionLinkStyles: StylesType = {
  ...centeredBlockStyles,
  display: "block",
  width: "fit-content",
  padding: 19,
  backgroundColor: "#3490EC",
  minWidth: 335,
  textAlign: "center",
  borderRadius: 60,
  color: "#FFFFFF",
};
