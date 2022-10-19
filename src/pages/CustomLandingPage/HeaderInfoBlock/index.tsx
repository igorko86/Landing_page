import { FC } from 'react';

import ImgBlock from '../../../components/ImageBlock';
import { IButton, IImg } from '../../../shared/models/customLandingPage.model';
import LinkA from '../../../components/LinkA';

import { AppWrapperDiv } from '../../../styles';
import { ContentDiv, H1, HeaderInfoDiv, TextBlockDiv } from './styles';

interface IProps {
  image: IImg;
  button: IButton;
  title: string;
}

const HeaderInfoBlock: FC<IProps> = ({ image, button, title }) => {
  const { url: imgSrc, alt } = image;
  const { title: buttonText, url } = button;

  return (
    <HeaderInfoDiv>
      <AppWrapperDiv>
        <ContentDiv>
          <TextBlockDiv>
            <H1>{title}</H1>
            <LinkA text={buttonText} link={url} />
          </TextBlockDiv>
          <ImgBlock url={imgSrc} alt={alt} />
        </ContentDiv>
      </AppWrapperDiv>
    </HeaderInfoDiv>
  );
};

export default HeaderInfoBlock;
