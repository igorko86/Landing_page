import styled from 'styled-components';

export const FooterBlock = styled.div`
  background: #fbfbfb;
  border-top: 1px solid #cdcdcd;
  min-height: 316px;
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 0 30px;
`;

export const ListWrapper = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const LogoDiv = styled.div`
  svg {
    width: 312px;
    height: 108px;
  }
`;

export const SocialNetworkDiv = styled.div`
  margin: 18px;

  svg {
    margin-right: 12px;
  }
`;

export const CopyrightP = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #404040;
  max-width: 432px;
  margin: 10px 0 0 18px;
`;
