import { FC } from 'react';

import { Logo } from '../../../assets/icons/logo';
import Navigation from '../../Navigation';
import Auth from '../Auth';
import MobileHeader from '../MobileHeader';
import { useTabletMediaQuery } from '../../../shared/hooks/usMediaQueries.hooks';

import { Header } from './styles';

const CommonHeader: FC = () => {
  const { isTablet } = useTabletMediaQuery();

  if (isTablet) {
    return <MobileHeader />;
  }

  return (
    <Header>
      <Logo />
      <Navigation />
      <Auth />
    </Header>
  );
};

export default CommonHeader;
