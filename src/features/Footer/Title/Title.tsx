import { FC } from 'react';

import { TitleH5 } from './styles';

interface IProps {
  title: string;
}

const Title: FC<IProps> = ({ title }) => {
  return <TitleH5>{title}</TitleH5>;
};

export default Title;
