'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import {
  type ContactFormData,
  type ContactFormErrors,
  validateContactForm,
} from '@/lib/validation';

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const validateForm = () => {
    const newErrors = validateContactForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/xeolwjpn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        onSubmit?.(formData);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xeolwjpn"
        method="POST"
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              id="contact-name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
              disabled={status === 'loading'}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                className="text-red-500 text-sm mt-1"
              >
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
              disabled={status === 'loading'}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                className="text-red-500 text-sm mt-1"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <Textarea
            id="contact-message"
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? 'contact-message-error' : undefined
            }
            className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
            disabled={status === 'loading'}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              className="text-red-500 text-sm mt-1"
            >
              {errors.message}
            </p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="w-full group transition-all duration-200"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>

      {status === 'success' && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
        >
          <CheckCircle className="h-5 w-5" />
          <span>Message sent successfully! I&apos;ll get back to you soon.</span>
        </div>
      )}

      {status === 'error' && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
        >
          <AlertCircle className="h-5 w-5" />
          <span>Failed to send message. Please try again.</span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
