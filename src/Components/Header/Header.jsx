import React, { useState } from "react";
import styled, { css } from "styled-components";

//* Components *//
import NavItem from "./NavItem";

//* Styles *//
import { MainContainer } from "../../UI/container";
import { hoverIconStyle } from "../../constant/hoverIconStyle";

//* Icons *//
import { BiSearch } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";

//* Images *//
import MainLogo from "./../../asset/Image/Logo/Main-Logo.png";

//* Data *//
import { navItems } from "../../constant/navItems";
import Search from "./Search";

const Header = ({ setShowModal }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <MainContainer>
      <MainHeader space>
        <BasketContainer>
          <Icon>
            <CgShoppingBag
              size={"27px"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={hoverIconStyle(isActive)}
            />
          </Icon>
          <LoginRegisterButton>
            <div>ورورد</div> <SlashCenter>/</SlashCenter> <div>ثبت نام</div>
          </LoginRegisterButton>
        </BasketContainer>

        <Search searchHome="searchHome" setShowModal={setShowModal} />

        <LogoContainer>
          <img src={MainLogo} alt="Logo of website" />
        </LogoContainer>
      </MainHeader>

      <MenuContainer>
        <MainNav space>
          <HeaderNavigation>
            {navItems.map((item) => {
              return <NavItem itemId={item.id} key={item.id} data={item} />;
            })}
          </HeaderNavigation>
        </MainNav>
      </MenuContainer>
    </MainContainer>
  );
};

export default Header;

//* Styled Components *//

const MenuContainer = styled.div`
  position: relative;
`;

const MainNav = styled.nav`
  position: relative;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 5px;
    border-radius: 11px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 11px;
    background-color: #1fab89;
  }

  ${(props) =>
    props.space &&
    css`
      padding: 0.5rem;
    `}
`;

const HeaderNavigation = styled.ul`
  width: 1140px;
  padding-bottom: 0.5rem;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.space &&
    css`
      padding: 30px 8px 15px;
    `}
`;

const BasketContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LoginRegisterButton = styled.button`
  background: #00bf6f;

  border: none;
  border-radius: 22px;
  color: #fff;
  padding: 0px 25px;
  line-height: 44px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 20px;

  position: relative;
`;

const SlashCenter = styled.div`
  position: absolute;
  top: 7%;
  left: 53%;
  transform: translate(-505, -50%);

  font-size: 1.5rem;
`;

const LogoContainer = styled.div`
  cursor: "pointer";
`;

const Icon = styled.span`
  cursor: pointer;

  margin: 10px;
  margin-left: 0;
`;
