import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GA_MEASUREMENT_ID, pageview } from '../config/analytics';

export const useGoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Add the GA script to the document
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    
    // Initialize GA
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });

    // Track page views on route changes
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      // Remove the script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [router.events]);
};
