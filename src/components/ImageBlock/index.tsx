import { FC } from 'react';

import { ImgDiv } from './styles';

interface IProps {
  alt: string;
  url: string;
}

const ImageBlock: FC<IProps> = ({ alt, url }) => {
  return (
    <ImgDiv>
      <img src={url} alt={alt} />
    </ImgDiv>
  );
};

export default ImageBlock;
