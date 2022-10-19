import ReactGA from 'react-ga';

export const buttonEvent = (label: string) => {
  ReactGA.event({
    category: 'Button',
    action: 'Click Button',
    label,
  });
};

export const linkEvent = (label: string) => {
  ReactGA.event({
    category: 'Link',
    action: 'Click Link',
    label,
  });
};

export const scrollEvent = (scrollY: number) => {
  ReactGA.ga('send', 'scroll depth reached:', scrollY);
};
