import styled from 'styled-components';

import { DeviceSize } from '../../../shared/constants';

export const JoinDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  gap: 20px;

  @media (max-width: ${DeviceSize.tablet}px) {
    flex-direction: column;

    & button {
      min-width: 201px;
      font-weight: 700;
      font-size: 28px;
      line-height: 40px;
    }
  }
`;

export const TitleH2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;

  @media (max-width: ${DeviceSize.tablet}px) {
    text-align: center;
    padding: 0 15px;
  }
`;
