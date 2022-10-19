import styled from 'styled-components';

import { DeviceSize } from '../../../../shared/constants';

export const TextDiv = styled.div`
  padding: 20px;

  @media (max-width: ${DeviceSize.mobile}px) {
    &.mobile-reverse {
      order: 1;
    }
    padding: 15px;
  }
`;

export const TitleH2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;

  @media (max-width: ${DeviceSize.mobile}px) {
    text-align: center;
  }
`;

export const SubtitleDiv = styled.div`
  & p {
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    @media (max-width: ${DeviceSize.mobile}px) {
      text-align: center;
    }
  }

  & a {
    text-decoration: underline;
    color: #000fff;
  }
`;
