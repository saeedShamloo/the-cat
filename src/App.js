import React from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Loading from "./components/Loading";
import * as MQ from "./style/mediaQueries";

const Container = styled.div`
  display: flex;
  padding-left: 250px;
  ${MQ.small} {
    padding-left: 0;
  }
`;

export default function AppLayout() {
  return (
    <Container>
      <Navigation />
      <Content />
      <Loading />
    </Container>
  );
}
