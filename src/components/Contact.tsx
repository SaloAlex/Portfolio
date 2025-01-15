import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        'service_av2in54',
        'template_n8x3h2q',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'w1_ktAmft92tTpAqt'
      )
      .then(
        () => {
          setStatus('success'); // Cambia el estado a 'success'
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('error'); // Cambia el estado a 'error'
          alert('Error al enviar el mensaje. Intenta de nuevo más tarde.');
        }
      );
  };

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
          <p className="text-muted-foreground">{t('contact.description')}</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('contact.name')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('contact.email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('contact.message')}</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 text-white bg-primary rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            size="lg"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mr-2 h-5 w-5"
              >
                <Send />
              </motion.div>
            ) : (
              <Send className="mr-2 h-5 w-5" />
            )}
            {status === 'sending' ? t('contact.sending') : t('contact.send')}
          </Button>
          {status === 'success' && (
            <p className="text-green-500 mt-4 text-center">
              Your message has been sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 mt-4 text-center">
              Error sending the message. Please try again later.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
