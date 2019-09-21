import React from 'react';

import { TopBar, Logo, Icon, Name } from './styles';

export default function Header() {
  return (
    <TopBar>
      <Logo to="/">
        <Icon alt="Github" src="/images/logo.svg" width="30" />
        <Name>Github</Name>
      </Logo>
    </TopBar>
  );
}
