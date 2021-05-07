import React from "react";
import styled from "styled-components";
import colors from "../../../style/colors";

const SidebarItem = styled.div`
  cursor: pointer;
  padding: 16px;
  background: ${({ active }) =>
    active ? colors.primary.bg : colors.neutral.bg};
  color: ${({ active }) =>
    active ? colors.primary.text : colors.neutral.text};
  &:hover {
    background: ${({ active }) =>
      active ? colors.primary.hoverBg : colors.neutral.hoverBg};
  }
`;

export default function SidebarItems({ items, onClick, activeId }) {
  return items.map((item, index) => (
    <SidebarItem
      key={item.id}
      onClick={() => onClick(item)}
      active={item.id == activeId}
    >
      {item.name}
    </SidebarItem>
  ));
}
