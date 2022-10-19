import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactHtmlParser from 'react-html-parser';

import Footer from './features/Footer';
import AppHeader from './features/AppHeader';
import CustomLandingPage from './pages/CustomLandingPage';
import customLandingPageService from './shared/services/customLandingPage.service';
import { ICustomLandingPageModel } from './shared/models/customLandingPage.model';
import useAnalytics from './shared/hooks/useAnalytics';
import useSeoData from './shared/hooks/useSeoData';

import { AppWrapperDiv } from './styles';

function App() {
  const { pathname, search } = useLocation();
  const [pageData, setPageData] = useState<ICustomLandingPageModel>();
  const seoData = useSeoData();
  useAnalytics();

  const getPageData = async () => {
    try {
      const data = await customLandingPageService.getPageData(pathname, search);

      setPageData(data);
    } catch (e: any) {
      console.log(e?.message);
    }
  };

  useEffect(() => {
    getPageData();
  }, [pathname, search]);

  if (!pageData) {
    return null;
  }

  return (
    <>
      <Helmet>{ReactHtmlParser(seoData?.html || '')}</Helmet>
      <AppWrapperDiv>
        <AppHeader isPartner={pageData.pageType === 'partner'} logoData={pageData.headerLogo} />
      </AppWrapperDiv>
      <CustomLandingPage {...pageData} />
      <Footer />
    </>
  );
}

export default App;
