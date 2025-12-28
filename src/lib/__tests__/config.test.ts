const originalEnv = { ...process.env };

const restoreEnv = () => {
  for (const key of Object.keys(process.env)) {
    if (!(key in originalEnv)) {
      delete process.env[key];
    }
  }

  Object.assign(process.env, originalEnv);
};

describe('config', () => {
  afterEach(() => {
    restoreEnv();
    jest.resetModules();
  });

  it('uses defaults when env vars are missing', async () => {
    delete process.env.NEXT_PUBLIC_APP_URL;
    process.env.NODE_ENV = 'development';

    jest.resetModules();
    const { config } = await import('../config');

    expect(config.app.url).toBe('https://www.shubhenduvaid.com');
    expect(config.app.env).toBe('development');
    expect(config.analytics.enabled).toBe(false);
    expect(config.features.performanceMonitoring).toBe(true);
  });

  it('uses production flags and overrides', async () => {
    process.env.NEXT_PUBLIC_APP_URL = 'https://example.test';
    process.env.NODE_ENV = 'production';

    jest.resetModules();
    const { config } = await import('../config');

    expect(config.app.url).toBe('https://example.test');
    expect(config.app.env).toBe('production');
    expect(config.analytics.enabled).toBe(true);
    expect(config.features.errorReporting).toBe(true);
  });
});
