import { FC, ReactNode } from 'react';

import { buttonEvent } from '../../analyticsEvents/google';
import { buttonPixelEvent } from '../../analyticsEvents/pixel';

import { ButtonStyle } from './styles';

interface IProps {
  text?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<IProps> = ({ onClick, text, children, ...props }) => {
  const handleClick = () => {
    if (text) {
      buttonEvent(text);
      buttonPixelEvent(text);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonStyle {...props} onClick={handleClick}>
      {text || children}
    </ButtonStyle>
  );
};

export default Button;
