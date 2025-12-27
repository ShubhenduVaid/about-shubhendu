export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

const EMAIL_PATTERN = /\S+@\S+\.\S+/;

export const validateContactForm = (
  data: ContactFormData
): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = 'Name is required';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Invalid email format';
  }

  if (!message) {
    errors.message = 'Message is required';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};
