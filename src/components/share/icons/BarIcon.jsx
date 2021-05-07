import React from "react";
import styled from "styled-components";

const BarIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BarItem = styled.div`
  width: 22px;
  height: 3px;
  background-color: #555;
  margin: 2px 0;
`;

export default function BarIcon() {
  return (
    <BarIconContainer>
      <BarItem />
      <BarItem />
      <BarItem />
    </BarIconContainer>
  );
}
