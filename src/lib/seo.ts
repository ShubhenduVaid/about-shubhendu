import { Metadata } from 'next';

/**
 * SEO utility functions for generating metadata
 */
export class SEOUtils {
  private static readonly baseUrl = 'https://www.shubhenduvaid.com';

  /**
   * Generate page metadata
   * @param options - SEO options
   */
  static generateMetadata(options: {
    title: string;
    description: string;
    path?: string;
    image?: string;
  }): Metadata {
    const {
      title,
      description,
      path = '',
      image = '/opengraph-image.jpg',
    } = options;
    const url = `${this.baseUrl}${path}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        images: [{ url: image }],
      },
      twitter: {
        title,
        description,
        images: [image],
      },
      alternates: {
        canonical: url,
      },
    };
  }
}
