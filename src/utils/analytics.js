import ReactGA from 'react-ga4';

// Initialize Google Analytics
const initGA = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('G-ME22X2JDD1');
    console.log('Google Analytics initialized');
  }
};

// Track page views
export const trackPageView = (path) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

// Track events
export const trackEvent = (category, action, label, value) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event({
      category,
      action,
      label,
      value
    });
  }
};

export default initGA;
