import { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';

import { TextDiv, SubtitleDiv, TitleH2 } from './styles';

interface IProps {
  title: string;
  subTitle: string;
  className?: string;
}

const TextBlock: FC<IProps> = ({ className, title, subTitle }) => {
  return (
    <TextDiv className={className}>
      <TitleH2>{title}</TitleH2>
      <SubtitleDiv>{ReactHtmlParser(subTitle)}</SubtitleDiv>
    </TextDiv>
  );
};

export default TextBlock;
