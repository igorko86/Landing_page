import { FC, Fragment } from 'react';

import Line from '../../../components/Line/Line';
import { BlockType, IRowData } from '../../../shared/models/customLandingPage.model';
import useGetBlockByType from './useGetBlockByType';
import { useMobileMediaQuery } from '../../../shared/hooks/usMediaQueries.hooks';

import { ContentDiv } from './styles';

interface IProps {
  contentBlocks: IRowData[];
}

const Content: FC<IProps> = ({ contentBlocks }) => {
  const getBlockByType = useGetBlockByType();
  const { isMobile } = useMobileMediaQuery();

  return (
    <>
      {contentBlocks.map(({ row }, index) => {
        const [left, right] = row;

        return (
          <Fragment key={index}>
            <ContentDiv>
              {isMobile && left.column.type === BlockType.TextBlock ? (
                <>
                  {getBlockByType(right.column)}
                  {getBlockByType(left.column)}
                </>
              ) : (
                <>
                  {getBlockByType(left.column)}
                  {getBlockByType(right.column)}
                </>
              )}
            </ContentDiv>
            {contentBlocks.length - 1 !== index && <Line />}
          </Fragment>
        );
      })}
    </>
  );
};

export default Content;
