import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getCats } from "../redux/modules/cats";
import CatGallery from "./CatGallery";

const ContentContainer = styled.div`
  padding: 15px;
  flex: 1;
`;

const DashbordTitle = styled.p`
  background: #fff;
  padding: 30px;
  border: 1px solid #e1e1e1;
  font-size: 2em;
`;

export default function Content() {
  const { list: cats, page, id } = useSelector(getCats);

  return (
    <ContentContainer>
      {cats.length == 0 ? (
        <DashbordTitle>Please Select a category</DashbordTitle>
      ) : (
        <CatGallery cats={cats} category={id} currentPage={page} />
      )}
    </ContentContainer>
  );
}
