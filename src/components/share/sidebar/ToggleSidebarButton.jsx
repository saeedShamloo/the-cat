import React from "react";
import styled from "styled-components";
import * as MQ from "../../../style/mediaQueries";
import BarIcon from "../icons/BarIcon";

const ToggleButton = styled.button`
  display: none;
  position: fixed;
  top: 10px;
  left: 0;
  border: none;
  outline: none;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
  border-radius: 0 4px 4px 0;
  align-items: center;
  background: #fff;
  cursor: pointer;
  height: 40px;
  justify-content: center;
  line-height: 40px;
  text-align: center;
  width: 45px;
  ${MQ.small} {
    display: inline-block;
  }
`;

export default function ToggleSidebarButton({ onClick }) {
  return (
    <ToggleButton onClick={onClick}>
      <BarIcon />
    </ToggleButton>
  );
}
