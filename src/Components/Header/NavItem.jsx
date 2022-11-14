import React from "react";
import styled from "styled-components";

const NavItem = ({ data }) => {
  return <HeaderNavItem>{data.title}</HeaderNavItem>;
};

export default NavItem;

//* Styled Components *//

const HeaderNavItem = styled.li`
  font-size: bold;
  cursor: pointer;
`;
