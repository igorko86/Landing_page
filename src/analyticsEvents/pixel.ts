import ReactPixel from 'react-facebook-pixel';

export const buttonPixelEvent = (label: string) => {
  ReactPixel.track('click', {
    category: 'Button',
    action: 'Click Button',
    label,
  });
};

export const linkPixelEvent = (label: string) => {
  ReactPixel.track('click', {
    category: 'Link',
    action: 'Click Link',
    label,
  });
};

export const scrollPixelEvent = (scrollY: number) => {
  ReactPixel.track('scroll', {
    action: `Scroll depth reached ${scrollY}`,
  });
};
