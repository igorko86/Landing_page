import ImageBlock from '../../../components/ImageBlock';
import VideoBlock from './VideoBlock';
import TextBlock from './TextBlock';
import { BlockType, ITextBlock, IVideoBlock } from '../../../shared/models/customLandingPage.model';

interface IGetBlockType {
  type: BlockType;
  data: any;
}
const useGetBlockByType = () => {
  return function getBlockByType({ type, data }: IGetBlockType) {
    switch (type) {
      case BlockType.ImgBlock:
        return <ImageBlock {...data.image} />;
      case BlockType.VideoBlock:
        return <VideoBlock {...(data as IVideoBlock)} />;
      case BlockType.TextBlock:
        return <TextBlock {...(data as ITextBlock)} />;
      default:
        return null;
    }
  };
};

export default useGetBlockByType;
