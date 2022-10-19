import styled from 'styled-components';

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 13px 0 30px;
`;

export const ListWrapper = styled.div`
  margin: 17px 0 20px;
  display: flex;
  justify-content: space-between;
`;

export const LogoDiv = styled.div`
  svg {
    width: 162px;
    height: 55px;
  }
`;

export const SocialNetworkDiv = styled.div`
  margin-top: 18px;

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
  margin-top: 10px;
`;
