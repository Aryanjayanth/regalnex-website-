// Type definitions for Google Analytics
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare module 'react-ga4' {
  export function initialize(measurementId: string, options?: any): void;
  export function pageview(path: string): void;
  export function event(args: {
    category: string;
    action: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
  }): void;
  export function set(fieldsObject: any): void;
  export function send(fieldsObject: any): void;
}
