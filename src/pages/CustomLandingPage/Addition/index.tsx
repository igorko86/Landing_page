import { FC } from 'react';

import TextBlock from './TextBlock';
import { IAdditionItem } from '../../../shared/models/customLandingPage.model';

import { AdditionContentDiv, AdditionDiv, TitleH2 } from './styles';

interface IProps {
  title: string;
  items: IAdditionItem[];
}
const Addition: FC<IProps> = ({ title, items }) => {
  return (
    <AdditionDiv>
      <TitleH2>{title}</TitleH2>
      <AdditionContentDiv>
        {items.map((item, index) => {
          return <TextBlock key={index} {...item} />;
        })}
      </AdditionContentDiv>
    </AdditionDiv>
  );
};

export default Addition;
