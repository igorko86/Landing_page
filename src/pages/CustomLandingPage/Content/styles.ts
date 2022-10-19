import styled from 'styled-components';

import { DeviceSize } from '../../../shared/constants';

export const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(145px, auto);
  grid-gap: 18px 20px;
  margin-top: 20px;

  @media (max-width: ${DeviceSize.mobile}px) {
    grid-template-columns: 1fr;
  }
`;
