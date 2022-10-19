import { FC } from 'react';
import { LinkA } from './styles';

interface IProps {
  text: string;
  link?: string;
}

const LinkFooter: FC<IProps> = ({ text, link }) => {
  return <LinkA href={link}>{text}</LinkA>;
};

export default LinkFooter;
