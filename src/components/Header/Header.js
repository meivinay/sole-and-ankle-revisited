import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <ShoppingBagIcon id='shopping-bag' />
        <SearchIcon id='search' />
        <MenuIcon id="menu" />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media ${props => props.theme.queries.tabletAndDown} {
    height: 68px;
  }
  @media ${props => props.theme.queries.phoneAndDown} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media ${props => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const ShoppingBagIcon = styled(Icon)`
display: none;
@media ${props => props.theme.queries.tabletAndDown} {
    margin-right: 34px;
    display: block;
  }
`
const SearchIcon = styled(Icon)`
  display: none;
  margin-right: 32px;
  @media ${props => props.theme.queries.tabletAndDown} {
    display: block;
  }
`
const MenuIcon = styled(Icon)`
  display: none;
  @media ${props => props.theme.queries.tabletAndDown} {
    display: block;
  }
`
export default Header;
