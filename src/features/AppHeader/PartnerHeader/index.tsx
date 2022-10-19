import { FC } from 'react';

import { Logo } from '../../../assets/icons/logo';
import { ILogo } from '../../../shared/models/customLandingPage.model';
import LinkA from '../../../components/LinkA';

import { DividerDiv, LogoWrapperDiv } from '../styles';
import { Header, WrapperDiv } from './styles';

interface IProps {
  logoData: ILogo;
}

const PartnerHeader: FC<IProps> = ({ logoData }) => {
  return (
    <Header>
      <LogoWrapperDiv>
        <Logo />
        <DividerDiv />
        <img src={logoData.url} alt={logoData.alt} />
      </LogoWrapperDiv>
      <WrapperDiv>
        <LinkA text="Join" />
      </WrapperDiv>
    </Header>
  );
};

export default PartnerHeader;
