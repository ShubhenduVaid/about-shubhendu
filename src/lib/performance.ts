/**
 * Performance monitoring utilities
 */
export class PerformanceMonitor {
  /**
   * Measure and log component render time
   * @param componentName - Name of the component
   * @param fn - Function to measure
   */
  static async measureRender<T>(
    componentName: string,
    fn: () => T
  ): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();

    const duration = end - start;

    if (duration > 16) {
      // Log if render takes more than 16ms (60fps threshold)
      console.warn(
        `Slow render detected: ${componentName} took ${duration.toFixed(2)}ms`
      );
    }

    return result;
  }

  /**
   * Report Core Web Vitals
   */
  static reportWebVitals() {
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      // Web Vitals reporting is handled by Vercel Speed Insights
      // Additional custom reporting can be added here
    }
  }
}
