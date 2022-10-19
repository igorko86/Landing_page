export {};
declare global {
  interface Window {
    ANALYTICS_INITIALIZED: boolean;
    APP_CONFIG: {
      SERVER_URL: string;
      DEV_SERVER_URL: string;
      ENV: string;
    };
  }
}
