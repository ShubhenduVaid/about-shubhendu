import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => {
    const resolvedSrc = typeof src === 'string' ? src : src?.src ?? '';
    return React.createElement('img', { src: resolvedSrc, alt, ...props });
  },
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }) =>
    React.createElement('a', { href, ...props }, children),
}));

jest.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

jest.mock('@vercel/analytics/next', () => ({
  Analytics: () => null,
}));

jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => null,
}));

if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

if (!globalThis.matchMedia) {
  globalThis.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false;
    },
  });
}

if (!globalThis.Response) {
  globalThis.Response = class {
    constructor(body, init = {}) {
      this._body = body;
      const headerEntries = Object.entries(init.headers || {});
      const headerMap = new Map(
        headerEntries.map(([key, value]) => [key.toLowerCase(), value])
      );
      this.headers = {
        get(name) {
          return headerMap.get(name.toLowerCase()) || null;
        },
      };
    }

    async text() {
      return this._body;
    }
  };
}
