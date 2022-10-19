import { FC } from 'react';

import Burger from '../../../assets/Burger';
import { Logo } from '../../../assets/icons/logo';
import LinkA from '../../../components/LinkA';

import { Header } from './styles';

const MobileHeader: FC = () => {
  return (
    <Header>
      <Burger />
      <Logo />
      <LinkA text="Join" />
    </Header>
  );
};

export default MobileHeader;
