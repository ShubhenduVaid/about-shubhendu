import { Logger } from '../logger';

describe('Logger', () => {
  const originalEnv = { ...process.env };

  const restoreEnv = () => {
    for (const key of Object.keys(process.env)) {
      if (!(key in originalEnv)) {
        delete process.env[key];
      }
    }

    Object.assign(process.env, originalEnv);
  };

  let errorSpy: jest.SpyInstance;
  let warnSpy: jest.SpyInstance;
  let infoSpy: jest.SpyInstance;

  beforeEach(() => {
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    infoSpy = jest.spyOn(console, 'info').mockImplementation(() => {});
  });

  afterEach(() => {
    errorSpy.mockRestore();
    warnSpy.mockRestore();
    infoSpy.mockRestore();
    restoreEnv();
  });

  it('logs error details with context', () => {
    const error = new Error('Boom');

    Logger.error(error, { feature: 'logger-test' });

    expect(errorSpy).toHaveBeenCalledWith(
      'Application Error:',
      expect.objectContaining({
        message: 'Boom',
        feature: 'logger-test',
        url: window.location.href,
        userAgent: window.navigator.userAgent,
        timestamp: expect.any(String),
        stack: expect.any(String),
      })
    );
  });

  it('hits the production branch without throwing', () => {
    process.env.NODE_ENV = 'production';

    Logger.error(new Error('Prod'));

    expect(errorSpy).toHaveBeenCalled();
  });

  it('logs warnings and info messages', () => {
    Logger.warn('Heads up', { area: 'testing' });
    Logger.info('FYI', { area: 'testing' });

    expect(warnSpy).toHaveBeenCalledWith('Warning:', {
      message: 'Heads up',
      area: 'testing',
    });
    expect(infoSpy).toHaveBeenCalledWith('Info:', {
      message: 'FYI',
      area: 'testing',
    });
  });
});
