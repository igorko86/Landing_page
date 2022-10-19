import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import customLandingPageService from '../services/customLandingPage.service';
import { ISeoData } from '../models/customLandingPage.model';

const useSeoData = () => {
  const { pathname, search } = useLocation();
  const [seoData, setSeoData] = useState<ISeoData>();

  const getMetaData = async () => {
    try {
      const data = await customLandingPageService.getSeoData(pathname + search);

      setSeoData(data);
    } catch (e: any) {
      console.log(e?.message);
    }
  };

  useEffect(() => {
    getMetaData();
  }, [pathname, search]);

  return seoData;
};

export default useSeoData;
