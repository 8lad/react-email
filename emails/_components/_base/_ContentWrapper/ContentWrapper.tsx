import { Section } from "@react-email/components";
import React from "react";
import { StylesType } from "../../../_helpers/types";

interface ContentWrapperProps {
  children: React.ReactNode;
  additionalStyles?: StylesType;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  additionalStyles,
}) => {
  const contentWrapperStyles: StylesType = {
    backgroundColor: "#FFFFFF",
    width: "100%",
    overflow: "hidden",
    borderRadius: 6,
    ...additionalStyles,
  };

  return <Section style={contentWrapperStyles}>{children}</Section>;
};
