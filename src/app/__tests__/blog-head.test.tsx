import BlogHead from '../blog/head';
import React from 'react';

describe('BlogHead', () => {
  it('renders rss link tag', () => {
    const element = BlogHead();
    const link = React.Children.only(element.props.children);

    expect(link.type).toBe('link');
    expect(link.props.rel).toBe('alternate');
    expect(link.props.href).toBe('/rss.xml');
  });
});
