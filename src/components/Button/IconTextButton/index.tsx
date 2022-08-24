import {
  Bank, CreditCard, MapPin, Money, Trash,
} from 'phosphor-react';
import React, { useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { IconTextButtonContainer, IThemeIconTextButton } from './styles';

type IIconType = 'trash' | 'map-pin' | 'bank' | 'money' | 'credit-card';

interface IIconTextButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | JSX.Element[];
    icon: IIconType;
    themeButton: IThemeIconTextButton;
}

const IconTextButton: React.FC<IIconTextButton> = ({
  children, themeButton, icon, ...rest
}) => {
  const themeApplication = useContext(ThemeContext);

  const typeIcon = useCallback(() => {
    switch (icon) {
      case 'trash':
        return <Trash size={20} color={themeApplication['purple-dark']} />;
      case 'map-pin':
        return <MapPin color={themeApplication['purple-dark']} size={20} />;
      case 'credit-card':
        return <CreditCard color={themeApplication.purple} size={20} />;
      case 'bank':
        return <Bank color={themeApplication.purple} size={20} />;
      case 'money':
        return <Money color={themeApplication.purple} size={20} />;
      default:
        return <Trash color={themeApplication['purple-dark']} size={20} />;
    }
  }, [themeApplication, icon]);

  return (
    <IconTextButtonContainer themeButton={themeButton} {...rest}>
      {typeIcon()}
      {children}
    </IconTextButtonContainer>
  );
};

export default IconTextButton;
