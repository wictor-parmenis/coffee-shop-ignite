import React, { useCallback } from 'react';

import { NavLink } from 'react-router-dom';
import { HeaderContainer, LeftContainer, RightContainer } from './styles';
import Logo from '../../assets/logo.svg';
import ShoppingCartButton from '../Button/ShoppingCartButton';
import IconTextButton from '../Button/IconTextButton';

const Header: React.FC = () => (
  // const handleClick = useCallback(() => {}, []);

  <HeaderContainer>
    <LeftContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="logo da cafeteria" />
      </NavLink>
    </LeftContainer>
    <RightContainer>
      <IconTextButton icon="map-pin" themeButton="primary">
        Recife, PE
      </IconTextButton>
      <NavLink to="/checkout" title="Checkout">
        <ShoppingCartButton theme="secondary" />
      </NavLink>
    </RightContainer>
  </HeaderContainer>
);
export default Header;
