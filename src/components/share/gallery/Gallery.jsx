import React from "react";
import styled from "styled-components";
import * as MQ from "../../../style/mediaQueries";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  grid-auto-rows: 210px;
  ${MQ.medium} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${MQ.xsmall} {
    grid-template-columns: repeat(1, 1fr);
  }
  ${MQ.xlarge} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GridItem = styled.div`
  box-shadow: 0 0 3px #aaa;
  cursor: pointer;
  box-shadow: -2px 2px 10px 0px rgba(0.4, 0.4, 0.4, 0.4);
  transition: all 200ms;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px #888;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export default function CatList({ products }) {
  return (
    <Grid>
      {products.map((product, index) => (
        <GridItem key={product.id + index}>
          <img src={product.url} />
        </GridItem>
      ))}
    </Grid>
  );
}
