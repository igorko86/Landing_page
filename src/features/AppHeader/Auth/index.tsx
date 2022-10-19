import { FC } from 'react';

import LinkA from '../../../components/LinkA';

import { AuthNavDiv, SinInLink } from './styles';

const Auth: FC = () => {
  return (
    <AuthNavDiv>
      <SinInLink text="Sign in" />
      <LinkA text="Join now!" />
    </AuthNavDiv>
  );
};

export default Auth;
