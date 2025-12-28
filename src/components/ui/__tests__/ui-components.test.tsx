import { render, screen } from '@testing-library/react';
import { Button } from '../button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../card';
import { Input } from '../input';
import { Textarea } from '../textarea';

describe('Button', () => {
  it('renders with default styles', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toHaveClass('inline-flex');
    expect(button).toHaveClass('bg-primary');
  });

  it('applies size and variant classes', () => {
    render(
      <Button variant="secondary" size="sm">
        Small
      </Button>
    );

    const button = screen.getByRole('button', { name: /small/i });

    expect(button).toHaveClass('bg-secondary');
    expect(button).toHaveClass('h-9');
  });

  it('renders as a child component when requested', () => {
    render(
      <Button asChild>
        <a href="/docs">Docs</a>
      </Button>
    );

    const link = screen.getByRole('link', { name: /docs/i });

    expect(link.tagName).toBe('A');
    expect(link).toHaveClass('inline-flex');
  });
});

describe('Card', () => {
  it('renders card structure with styles', () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>Card content</CardContent>
        <CardFooter>Card footer</CardFooter>
      </Card>
    );

    const card = container.firstChild as HTMLElement;

    expect(card).toHaveClass('rounded-lg');
    expect(screen.getByText('Card Title')).toHaveClass('text-2xl');
    expect(screen.getByText('Card description')).toHaveClass(
      'text-muted-foreground'
    );
  });

  it('merges custom classes', () => {
    render(
      <CardContent className="custom-content">Custom content</CardContent>
    );

    expect(screen.getByText('Custom content')).toHaveClass(
      'custom-content'
    );
  });
});

describe('Input', () => {
  it('renders input with provided attributes', () => {
    render(
      <Input
        type="email"
        placeholder="Email"
        className="custom-input"
      />
    );

    const input = screen.getByPlaceholderText('Email');

    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveClass('custom-input');
    expect(input).toHaveClass('border-input');
  });
});

describe('Textarea', () => {
  it('renders textarea with provided attributes', () => {
    render(
      <Textarea placeholder="Message" className="custom-textarea" />
    );

    const textarea = screen.getByPlaceholderText('Message');

    expect(textarea).toHaveClass('custom-textarea');
    expect(textarea).toHaveClass('border-input');
  });
});
