import { FC } from 'react';

import CommonHeader from './CommonHeader';
import PartnerHeader from './PartnerHeader';
import { ILogo } from '../../shared/models/customLandingPage.model';

interface IProps {
  isPartner: boolean;
  logoData: ILogo;
}

const AppHeader: FC<IProps> = ({ isPartner, logoData }) => {
  return isPartner ? <PartnerHeader logoData={logoData} /> : <CommonHeader />;
};

export default AppHeader;
