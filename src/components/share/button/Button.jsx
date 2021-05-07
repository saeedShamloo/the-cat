import React from "react";
import styled from "styled-components";
import colors from "../../../style/colors";

const StyledButton = styled.button`
  display: inline-block;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 200ms;
  margin: 15px 0;
  line-height: 2.5;
  background: ${({ primary }) =>
    primary ? colors.primary.bg : colors.neutral.bg};
  color: ${({ primary }) =>
    primary ? colors.primary.text : colors.neutral.text};
  &:hover {
    background: ${({ primary }) =>
      primary ? colors.primary.hoverBg : colors.neutral.hoverBg};
  }
`;

export default function Button({ primary, fullWidth, ...others }) {
  return <StyledButton primary={primary} fullWidth={fullWidth} {...others} />;
}
