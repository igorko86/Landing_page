import $api from '../../http';

import {
  IAnalyticsSettings,
  ICustomLandingPageModel,
  ISeoData,
  ISubmitFormReq,
} from '../models/customLandingPage.model';

interface IApiPath {
  landing: string;
  preview: string;
  seoData: string;
  analyticsSettings: string;
  submitForm: string;
}

const ApiPath: IApiPath = {
  landing: '/wp-json/plm/landing',
  preview: '/preview',
  seoData: '/seo',
  analyticsSettings: '/wp-json/plm/general-options',
  submitForm: '/form',
};

export const PREVIEW_URL = '/landing?preview_id=';

class CustomLandingPageService {
  static getPageData(path: string, search: string): Promise<ICustomLandingPageModel> {
    const fullPath = `${path}${search}`;
    let url = `${ApiPath.landing}${fullPath}`;

    if (fullPath.includes(PREVIEW_URL)) {
      const previewIdParam = new URLSearchParams(search).get('preview_id');

      url = `${ApiPath.landing}${ApiPath.preview}/${previewIdParam}`;
    }

    return $api.get(url).then(({ data }) => data);
  }

  static getAnalyticsSetting(): Promise<IAnalyticsSettings> {
    return $api.get(ApiPath.analyticsSettings).then(({ data }) => data);
  }

  static getSeoData(path: string): Promise<ISeoData> {
    return $api.get(`${ApiPath.landing}${ApiPath.seoData}${path}`).then(({ data }) => data);
  }

  static submitForm(params: ISubmitFormReq): void {
    $api.post(`${ApiPath.landing}${ApiPath.submitForm}`, params).catch((e: any) => console.log(e?.message));
  }
}

export default CustomLandingPageService;
