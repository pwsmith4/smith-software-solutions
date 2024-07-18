import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const HeaderWrapper = styled.header`
  background: ${colors.white};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 5%;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 80px;
  margin-right: 1rem;
`;

const CompanyName = styled.h1`
  color: ${colors.primary};
  margin: 0;
  font-size: 1.5rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled.a`
  color: ${colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <LogoWrapper>
          <Logo src="/logo.png" alt="Smith Software Solutions Logo" />
          <CompanyName>Smith Software Solutions</CompanyName>
        </LogoWrapper>
        <NavList>
          <NavItem><NavLink href="#home">Home</NavLink></NavItem>
          <NavItem><NavLink href="#services">Services</NavLink></NavItem>
          <NavItem><NavLink href="#about">About</NavLink></NavItem>
          <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;