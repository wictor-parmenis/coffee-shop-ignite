import React from 'react';

import { HeaderContainer, LeftContainer, RightContainer } from './styles';

const Header: React.FC = () => (
  <HeaderContainer>
    <LeftContainer>
      <p>logo</p>
    </LeftContainer>
    <RightContainer>
      <p>Buttons</p>
    </RightContainer>
  </HeaderContainer>
);

export default Header;
