import React, { useState } from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import ToggleSidebarButton from "./ToggleSidebarButton";
import * as MQ from "../../../style/mediaQueries";

const Drawer = styled.div`
  width: 250px;
  height: 100vh;
  overflow-x: hidde;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 0 4px #aaa;
  position: fixed;
  transition: all 250ms;
  left: 0;
  top: 0;
  ${MQ.small} {
    left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  }
`;

const SidebarTitle = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  img {
    filter: brightness(0.8);
  }
`;

export default function Sidebar({ logo, items, onItemClick }) {
  const [isOpen, setOpen] = useState(false);
  const [activeId, setActiveId] = useState();

  const handleItemClick = ({ id }) => {
    setActiveId(id);
    setOpen(false);
    onItemClick(id);
  };

  return (
    <>
      <ToggleSidebarButton onClick={() => setOpen(!isOpen)} />
      <Drawer isOpen={isOpen}>
        <SidebarTitle>{logo}</SidebarTitle>
        <SidebarItems
          activeId={activeId}
          items={items}
          onClick={handleItemClick}
        />
      </Drawer>
    </>
  );
}
