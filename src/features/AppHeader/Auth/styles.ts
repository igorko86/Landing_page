import styled from 'styled-components';

import LinkA from '../../../components/LinkA';

export const AuthNavDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SinInLink = styled(LinkA)`
  min-height: 39px;
  line-height: 1;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;
  background: 0;
  border: 1px solid #929292;
`;
