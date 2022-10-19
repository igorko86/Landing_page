import styled from 'styled-components';

import { DeviceSize } from './shared/constants';

export const AppWrapperDiv = styled.div`
  max-width: 1280px;
  padding: 0 30px;
  margin: 0 auto;

  @media (max-width: ${DeviceSize.mobile}px) {
    padding: 0 15px;
  }
`;
