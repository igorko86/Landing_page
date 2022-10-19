import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { useScrollTracker } from 'react-scroll-tracker';

import customLandingPageService from '../services/customLandingPage.service';
import { scrollEvent } from '../../analyticsEvents/google';
import { scrollPixelEvent } from '../../analyticsEvents/pixel';
import { IAnalyticsSettings } from '../models/customLandingPage.model';

const useAnalytics = () => {
  const { pathname, search } = useLocation();
  const [analyticsSettings, setAnalyticsSettings] = useState<IAnalyticsSettings>();

  useScrollTracker([25, 50, 75, 100], ({ scrollY }) => {
    scrollEvent(scrollY);
    scrollPixelEvent(scrollY);
  });

  const getAnalyticsSettings = async () => {
    try {
      const data = await customLandingPageService.getAnalyticsSetting();

      ReactGA.initialize(data.google_track_code);
      ReactPixel.init(data.facebook_pixel_code);

      window.ANALYTICS_INITIALIZED = true;

      setAnalyticsSettings(data);
    } catch (e: any) {
      console.log(e?.message);
    }
  };

  useEffect(() => {
    getAnalyticsSettings();
  }, []);

  useEffect(() => {
    // To Report Page View
    if (analyticsSettings && window.ANALYTICS_INITIALIZED) {
      ReactGA.pageview(pathname + search);
      ReactPixel.pageView();
    }
  }, [pathname, analyticsSettings]);
};

export default useAnalytics;
