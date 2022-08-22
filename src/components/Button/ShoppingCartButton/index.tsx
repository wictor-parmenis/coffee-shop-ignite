import React, { ButtonHTMLAttributes } from 'react';
import { ShoppingCart } from 'phosphor-react';
import { ShoppingCartButtonContainer, IThemeShoppingCartButton } from './styles';

interface IShoppingCartButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: IThemeShoppingCartButton;
}

const ShoppingCartButton: React.FC<IShoppingCartButton> = ({ theme, ...rest }) => (
  <ShoppingCartButtonContainer themeButton={theme} {...rest}>
    <ShoppingCart size={25} />
  </ShoppingCartButtonContainer>
);

export default ShoppingCartButton;
