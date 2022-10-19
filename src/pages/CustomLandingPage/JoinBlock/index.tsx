import { FC } from 'react';

import { IButton } from '../../../shared/models/customLandingPage.model';

import { JoinDiv, TitleH2 } from './styles';
import LinkA from '../../../components/LinkA';

interface IProps {
  title: string;
  button: IButton;
}
const JoinBlock: FC<IProps> = ({ title, button }) => {
  const { title: btnText, url } = button;

  return (
    <JoinDiv>
      <TitleH2>{title}</TitleH2>
      <LinkA text={btnText} link={url} />
    </JoinDiv>
  );
};

export default JoinBlock;
