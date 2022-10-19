import styled from 'styled-components';

import { DeviceSize } from '../../../shared/constants';

export const HeaderInfoDiv = styled.div`
  background: radial-gradient(50% 165.37% at 50% 100%, #fcfffe 27.18%, #e6f6f4 100%);
`;

export const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-auto-rows: auto;
  grid-gap: 20px;
  margin-bottom: 40px;

  @media (max-width: ${DeviceSize.mobile}px) {
    grid-template-columns: 1fr;

    & a {
      margin: auto;
    }
  }
`;

export const TextBlockDiv = styled.div`
  padding: 74px 20px;

  @media (max-width: ${DeviceSize.mobile}px) {
    order: 1;
    padding: 20px;

    & button {
      margin: 0 auto;
    }
  }
`;

export const H1 = styled.h1`
  font-family: 'Kameron', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
  line-height: 60px;
  margin-bottom: 20px;

  @media (max-width: ${DeviceSize.mobile}px) {
    font-size: 35px;
    line-height: 37px;
    text-align: center;
  }
`;
