import React, { useCallback, useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { HeaderContainer, LeftContainer, RightContainer } from './styles';
import Logo from '../../assets/logo.svg';
import ShoppingCartButton from '../Button/ShoppingCartButton';
import IconTextButton from '../Button/IconTextButton';
import { ProductsContext } from '../../contexts/productsContext';

const Header: React.FC = () => {
  const { quantityTotalProducts } = useContext(ProductsContext);

  return (
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
          <span>
            <p>{quantityTotalProducts()}</p>
          </span>
          <ShoppingCartButton theme="secondary" />
        </NavLink>
      </RightContainer>
    </HeaderContainer>
  );
};
export default Header;
