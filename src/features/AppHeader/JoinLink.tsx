import React, { FC } from 'react';

import { AppPagePath } from '../../pages/AppPagePath';

import { JoinLink as Link } from './styles';

interface IProps {
  text: string;
}

const JoinLink: FC<IProps> = ({ text }) => {
  return <Link to={AppPagePath.JOIN_NOW}>{text}</Link>;
};

export default JoinLink;
