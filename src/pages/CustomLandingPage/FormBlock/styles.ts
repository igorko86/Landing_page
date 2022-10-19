import styled from 'styled-components';

import { DeviceSize } from '../../../shared/constants';

export const EmailDiv = styled.div`
  background: #dadada33;
  margin-top: 20px;
`;

export const ContainerDiv = styled.div`
  padding: 21px 132px 40px;

  @media (max-width: ${DeviceSize.mobile}px) {
    padding: 15px;
  }
`;

export const TitleH2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
`;

export const TextP = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  margin-top: 10px;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;

  & input {
    max-width: 331px;
    width: 100%;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid #cdcdcd;
  }
`;
