/**
 * Logger utility for error tracking and monitoring
 */
export class Logger {
  /**
   * Log error with context information
   * @param error - The error to log
   * @param context - Additional context information
   */
  static error(error: Error, context?: Record<string, unknown>) {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : 'server',
      userAgent:
        typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      ...context,
    };

    console.error('Application Error:', errorInfo);

    // In production, send to monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to monitoring service
      // await fetch('/api/errors', { method: 'POST', body: JSON.stringify(errorInfo) });
    }
  }

  /**
   * Log warning messages
   * @param message - Warning message
   * @param context - Additional context
   */
  static warn(message: string, context?: Record<string, unknown>) {
    console.warn('Warning:', { message, ...context });
  }

  /**
   * Log info messages
   * @param message - Info message
   * @param context - Additional context
   */
  static info(message: string, context?: Record<string, unknown>) {
    console.info('Info:', { message, ...context });
  }
}
