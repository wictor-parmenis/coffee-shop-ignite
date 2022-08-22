import React from 'react';

import { HeaderContainer, LeftContainer, RightContainer } from './styles';
import Logo from '../../assets/logo.svg';
import ShoppingCartButton from '../Button/ShoppingCartButton';
import IconTextButton from '../Button/IconTextButton';

const Header: React.FC = () => (
  <HeaderContainer>
    <LeftContainer>
      <img src={Logo} alt="logo da cafeteria" />
    </LeftContainer>
    <RightContainer>
      <IconTextButton icon="map-pin" themeButton="primary">
        Recife, PE
      </IconTextButton>
      <ShoppingCartButton theme="secondary" />
    </RightContainer>
  </HeaderContainer>
);

export default Header;
