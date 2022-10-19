export interface IImg {
  url: string;
  alt: string;
}

export interface IButton {
  title: string;
  url: string;
  target: string;
}

export interface IHero {
  title: string;
  image: IImg;
  button: IButton;
}

export enum BlockType {
  ImgBlock = 'image',
  VideoBlock = 'video',
  TextBlock = 'text',
}

type Column = BlockType.ImgBlock | BlockType.VideoBlock | BlockType.TextBlock;

export interface IVideoBlock {
  url: string;
}

export interface ITextBlock {
  title: string;
  subTitle: string;
}

export interface IMageBlock {
  image: IImg;
}

export type IData = IVideoBlock | IMageBlock | ITextBlock;

export interface IColumnBlock {
  column: {
    type: Column;
    data: IData;
  };
}

export interface IRowData {
  row: IColumnBlock[];
}

export interface IForm {
  title: string;
  subTitle: string;
  embedCode: string;
}

export interface IAdditionItem {
  title: string;
  description: string;
}

export interface IAddition {
  title: string;
  items: IAdditionItem[];
}

export interface ICta {
  title: string;
  button: IButton;
}

export interface ILogo {
  url: string;
  alt: string;
}

export interface ICustomLandingPageModel {
  pageType: 'default' | 'partner' | string;
  headerLogo: ILogo;
  hero: IHero;
  contentBlocks: IRowData[];
  form: IForm;
  additionalServices: IAddition;
  cta: ICta;
}

export interface ISeoData {
  html: string;
  json: any;
}

export interface ISubmitFormReq {
  email: string;
  slug: string;
}

export interface IAnalyticsSettings {
  facebook_pixel_code: string;
  google_track_code: string;
}
