import { FC } from 'react';

import { TextDiv, TextP, TitleH3 } from './styles';

interface IProps {
  title: string;
  description: string;
}

const TextBlock: FC<IProps> = ({ title, description }) => {
  return (
    <TextDiv>
      <TitleH3>{title}</TitleH3>
      <TextP>{description}</TextP>
    </TextDiv>
  );
};

export default TextBlock;
