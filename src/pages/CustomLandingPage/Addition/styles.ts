import styled from 'styled-components';

import { DeviceSize } from '../../../shared/constants';

export const AdditionDiv = styled.div`
  margin-top: 20px;

  @media (max-width: ${DeviceSize.mobile}px) {
    padding: 0 15px;
  }
`;

export const TitleH2 = styled.h2`
  font-family: 'Kameron';
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 125px;

  @media (max-width: ${DeviceSize.mobile}px) {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: initial;
    margin: 0;
  }
`;

export const AdditionContentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 16px;
  grid-row-gap: 20px;
  margin: 30px 0 25px;

  @media (max-width: ${DeviceSize.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${DeviceSize.mobile}px) {
    grid-template-columns: 1fr;
  }
`;
