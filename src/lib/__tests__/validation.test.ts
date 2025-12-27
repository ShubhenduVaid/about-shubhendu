import { validateContactForm } from '../validation';

describe('validateContactForm', () => {
  it('returns errors for missing fields', () => {
    const errors = validateContactForm({ name: '', email: '', message: '' });

    expect(errors.name).toBe('Name is required');
    expect(errors.email).toBe('Email is required');
    expect(errors.message).toBe('Message is required');
  });

  it('returns an error for invalid email', () => {
    const errors = validateContactForm({
      name: 'Shubhendu',
      email: 'invalid-email',
      message: 'This is a valid message.',
    });

    expect(errors.email).toBe('Invalid email format');
  });

  it('returns an error for short messages', () => {
    const errors = validateContactForm({
      name: 'Shubhendu',
      email: 'test@example.com',
      message: 'Too short',
    });

    expect(errors.message).toBe('Message must be at least 10 characters');
  });

  it('returns no errors for valid data', () => {
    const errors = validateContactForm({
      name: 'Shubhendu Vaid',
      email: 'vaidshubhendu@gmail.com',
      message: 'Interested in a leadership role discussion.',
    });

    expect(Object.keys(errors)).toHaveLength(0);
  });
});
