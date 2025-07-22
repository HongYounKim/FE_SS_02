import React from "react";
import styled from "styled-components";
import { FiSearch, FiBell } from "react-icons/fi";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid #333;
  background: black;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>velog</Logo>
    <RightSection>
      <IconButton>
        <FiBell />
      </IconButton>
      <IconButton>
        <FiSearch />
      </IconButton>
      <LoginButton>로그인</LoginButton>
    </RightSection>
  </HeaderWrapper>
);

export default Header;
