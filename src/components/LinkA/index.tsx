import { FC, ReactNode } from 'react';

import { linkEvent } from '../../analyticsEvents/google';
import { linkPixelEvent } from '../../analyticsEvents/pixel';

import { LinkA as LinkAStyles } from './styles';

interface IProps {
  text?: string;
  link?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const LinkA: FC<IProps> = ({ onClick, link, text, children, ...props }) => {
  const handleClick = () => {
    if (text) {
      linkEvent(text);
      linkPixelEvent(text);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <LinkAStyles href={link} {...props} onClick={handleClick}>
      {text || children}
    </LinkAStyles>
  );
};

export default LinkA;
