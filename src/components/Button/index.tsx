import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ children, ...rest }) => (
  <ButtonContainer {...rest}>{children}</ButtonContainer>
);

export default Button;
