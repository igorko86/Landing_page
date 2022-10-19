import { useMediaQuery } from 'react-responsive';

import { DeviceSize } from '../constants';

export const useTabletMediaQuery = () => {
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet });

  return { isTablet };
};

export const useMobileMediaQuery = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return { isMobile };
};
